import{W as L,r as n,ag as Q,C as U,t as X,ah as Y,c as P}from"./index-7e8455e5.js";function w(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const j=L.createContext({latestIndex:0}),Z=j.Provider,ee=e=>{let{className:r,index:a,children:t,split:l,style:s}=e;const{latestIndex:p}=n.useContext(j);return t==null?null:n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:s},t),a<p&&l&&n.createElement("span",{className:`${r}-split`},l))},te=ee;var se=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const le=n.forwardRef((e,r)=>{var a,t;const{getPrefixCls:l,space:s,direction:p}=n.useContext(U),{size:c=(s==null?void 0:s.size)||"small",align:N,className:I,rootClassName:V,children:k,direction:S="horizontal",prefixCls:A,split:G,style:W,wrap:H=!1,classNames:f,styles:v}=e,R=se(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[d,m]=Array.isArray(c)?c:[c,c],b=w(m),$=w(d),T=E(m),F=E(d),z=X(k,{keepEmpty:!0}),O=N===void 0&&S==="horizontal"?"center":N,o=l("space",A),[M,q]=Y(o),B=P(o,s==null?void 0:s.className,q,`${o}-${S}`,{[`${o}-rtl`]:p==="rtl",[`${o}-align-${O}`]:O,[`${o}-gap-row-${m}`]:b,[`${o}-gap-col-${d}`]:$},I,V),h=P(`${o}-item`,(a=f==null?void 0:f.item)!==null&&a!==void 0?a:(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.item);let y=0;const D=z.map((i,g)=>{var x,C;i!=null&&(y=g);const K=i&&i.key||`${h}-${g}`;return n.createElement(te,{className:h,key:K,index:g,split:G,style:(x=v==null?void 0:v.item)!==null&&x!==void 0?x:(C=s==null?void 0:s.styles)===null||C===void 0?void 0:C.item},i)}),J=n.useMemo(()=>({latestIndex:y}),[y]);if(z.length===0)return null;const u={};return H&&(u.flexWrap="wrap"),!$&&F&&(u.columnGap=d),!b&&T&&(u.rowGap=m),M(n.createElement("div",Object.assign({ref:r,className:B,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),W)},R),n.createElement(Z,{value:J},D)))}),_=le;_.Compact=Q;const ae=_;export{ae as S};
