import{W as T,r as a,c as j,j as w}from"./index-RH1sRjLc.js";import{W as U,g as Y,t as Z,X as ee}from"./Compact-ld-axhXn.js";function P(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const I=T.createContext({latestIndex:0}),te=I.Provider,se=e=>{let{className:r,index:n,children:t,split:l,style:s}=e;const{latestIndex:p}=a.useContext(I);return t==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:r,style:s},t),n<p&&l&&a.createElement("span",{className:`${r}-split`},l))},le=se;var ae=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n};const ne=a.forwardRef((e,r)=>{var n,t;const{getPrefixCls:l,space:s,direction:p}=a.useContext(Y),{size:c=(s==null?void 0:s.size)||"small",align:N,className:_,rootClassName:A,children:W,direction:S="horizontal",prefixCls:k,split:G,style:H,wrap:R=!1,classNames:f,styles:v}=e,B=ae(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[d,m]=Array.isArray(c)?c:[c,c],b=P(m),$=P(d),D=E(m),F=E(d),z=Z(W,{keepEmpty:!0}),O=N===void 0&&S==="horizontal"?"center":N,o=l("space",k),[M,X,q]=ee(o),J=j(o,s==null?void 0:s.className,X,`${o}-${S}`,{[`${o}-rtl`]:p==="rtl",[`${o}-align-${O}`]:O,[`${o}-gap-row-${m}`]:b,[`${o}-gap-col-${d}`]:$},_,A,q),h=j(`${o}-item`,(n=f==null?void 0:f.item)!==null&&n!==void 0?n:(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.item);let y=0;const K=z.map((i,x)=>{var C,g;i!=null&&(y=x);const Q=i&&i.key||`${h}-${x}`;return a.createElement(le,{className:h,key:Q,index:x,split:G,style:(C=v==null?void 0:v.item)!==null&&C!==void 0?C:(g=s==null?void 0:s.styles)===null||g===void 0?void 0:g.item},i)}),L=a.useMemo(()=>({latestIndex:y}),[y]);if(z.length===0)return null;const u={};return R&&(u.flexWrap="wrap"),!$&&F&&(u.columnGap=d),!b&&D&&(u.rowGap=m),M(a.createElement("div",Object.assign({ref:r,className:J,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),H)},B),a.createElement(te,{value:L},K)))}),V=ne;V.Compact=U;const oe=V;function ce(){return w.jsx("div",{children:w.jsx(oe,{wrap:!0,children:"后台首页"})})}export{ce as default};