package com.github.eyesli.cache.Impl;

import com.github.eyesli.cache.ScriptCacheService;
import com.github.eyesli.config.GroovyNotSupportInterceptor;
import groovy.lang.Binding;
import groovy.lang.GroovyClassLoader;
import groovy.lang.Script;
import org.codehaus.groovy.control.CompilerConfiguration;
import org.codehaus.groovy.runtime.InvokerHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author Levi Li
 * @since 09/18/2023
 */
@Service
@SuppressWarnings("unchecked")
public class ManageCacheServiceImpl implements ScriptCacheService {

    private final CompilerConfiguration config;
    private final Map<String, Class<? extends Script>> parseScriptCache = new ConcurrentHashMap<>();

    @Autowired
    public ManageCacheServiceImpl(CompilerConfiguration config) {
        this.config = config;
    }


    @Override
    public Script parseScript(String scriptText, Binding binding) throws IOException {
        Class<? extends Script> script = parseScriptCache.get(DigestUtils.md5DigestAsHex(scriptText.getBytes()));
        GroovyClassLoader groovyClassLoader = null;

        if (script == null) {
            new GroovyNotSupportInterceptor().register();

            try {
                groovyClassLoader = new GroovyClassLoader(Thread.currentThread().getContextClassLoader(), config);
                Class<? extends Script> aClass = groovyClassLoader.parseClass(scriptText);
                parseScriptCache.put(DigestUtils.md5DigestAsHex(scriptText.getBytes()), aClass);
                script = aClass;
            } finally {
                if (groovyClassLoader != null) {
                    groovyClassLoader.close();
                }
            }
        }

        return InvokerHelper.createScript(script, binding);
    }

}