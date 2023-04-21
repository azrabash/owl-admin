import{r as f,C as fe,w as Le,s as u,E as pe,v as te,x as ae,R as H,q as Oe,F as Pe,H as Ie,J as He,K as q,L as Ge,M as qe,N as Be,Q as ze,U as Me,V as We,W as we,X as be,Y as Ue,Z as Qe,$ as Ke}from"./index.66a38464.js";var de=globalThis&&globalThis.__assign||function(){return de=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},de.apply(this,arguments)},Xe=globalThis&&globalThis.__rest||function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r},Ye={position:"top",trigger:"hover",unmountOnExit:!0};function Ze(e,a){var r,n=f.exports.useContext(fe),t=n.getPrefixCls,i=n.componentConfig,l=n.rtl,o=Le(e,Ye,i==null?void 0:i.Popover),y=o.style,s=o.className,p=o.children,E=o.position,V=o.getPopupContainer,x=o.trigger,b=o.defaultPopupVisible,_=o.popupVisible,A=o.triggerProps,T=o.unmountOnExit,L=o.onVisibleChange,N=o.content,S=o.title,j=Xe(o,["style","className","children","position","getPopupContainer","trigger","defaultPopupVisible","popupVisible","triggerProps","unmountOnExit","onVisibleChange","content","title"]),v=t("popover");return u(pe,{...de({},j,{ref:a,style:de({maxWidth:350},y),className:s,prefixCls:v,getPopupContainer:V,position:E,trigger:x,content:te("div",{className:ae(v+"-inner",(r={},r[v+"-inner-rtl"]=l,r)),children:[S?u("div",{className:v+"-title",children:S}):null,u("div",{className:v+"-inner-content",children:N})]}),popupHoverStay:!0,unmountOnExit:T,triggerProps:A,defaultPopupVisible:b,onVisibleChange:L||(A?A.onVisibleChange:void 0),childrenPrefix:v},"popupVisible"in o?{popupVisible:_}:{}),children:typeof p=="string"?u("span",{children:p}):p})}var Re=f.exports.forwardRef(Ze);Re.displayName="Popover";var Je=Re;function er(e,a){var r=f.exports.useContext(fe).getPrefixCls,n=r("typography"),t=e.className,i=e.style,l=e.children,o=ae(n,t);return u("article",{ref:a,style:i,className:o,children:l})}var De=f.exports.forwardRef(er);De.displayName="Typography";var rr=De,tr=globalThis&&globalThis.__awaiter||function(e,a,r,n){function t(i){return i instanceof r?i:new r(function(l){l(i)})}return new(r||(r=Promise))(function(i,l){function o(p){try{s(n.next(p))}catch(E){l(E)}}function y(p){try{s(n.throw(p))}catch(E){l(E)}}function s(p){p.done?i(p.value):t(p.value).then(o,y)}s((n=n.apply(e,a||[])).next())})},nr=globalThis&&globalThis.__generator||function(e,a){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,t,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(s){return function(p){return y([s,p])}}function y(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,t&&(i=s[0]&2?t.return:s[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,s[1])).done)return i;switch(t=0,i&&(s=[s[0]&2,i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,t=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=a.call(e,r)}catch(p){s=[6,p],t=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}};function ar(e){return tr(this,void 0,void 0,function(){var a,r,n,t,i;return nr(this,function(l){switch(l.label){case 0:if(!(navigator.clipboard&&navigator.clipboard.writeText))return[3,4];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(e)];case 2:return l.sent(),[2];case 3:return a=l.sent(),console.error(a!=null?a:new DOMException("The request is not allowed","NotAllowedError")),[3,4];case 4:r=document.createElement("span"),r.textContent=e,r.style.whiteSpace="pre",document.body.appendChild(r),n=window.getSelection(),t=window.document.createRange(),n.removeAllRanges(),t.selectNode(r),n.addRange(t),i=!1;try{i=window.document.execCommand("copy")}catch(o){console.log("error",o)}return n.removeAllRanges(),window.document.body.removeChild(r),[2,i?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))]}})})}function ir(e,a){const r=f.exports.useContext(Oe),n=r.prefixCls,t=n===void 0?"arco":n,i=e.spin,l=e.className,o={"aria-hidden":!0,focusable:!1,ref:a,...e,className:`${l?l+" ":""}${t}-icon ${t}-icon-copy`};return i&&(o.className=`${o.className} ${t}-icon-loading`),delete o.spin,delete o.isIcon,u("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:u("path",{d:"M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z"})})}const _e=H.forwardRef(ir);_e.defaultProps={isIcon:!0};_e.displayName="IconCopy";var or=_e;function lr(e,a){const r=f.exports.useContext(Oe),n=r.prefixCls,t=n===void 0?"arco":n,i=e.spin,l=e.className,o={"aria-hidden":!0,focusable:!1,ref:a,...e,className:`${l?l+" ":""}${t}-icon ${t}-icon-edit`};return i&&(o.className=`${o.className} ${t}-icon-loading`),delete o.spin,delete o.isIcon,u("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:u("path",{d:"m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36"})})}const Ne=H.forwardRef(lr);Ne.defaultProps={isIcon:!0};Ne.displayName="IconEdit";var sr=Ne,Te=function(e){return Pe(e)||Ie(e)};function ne(e){var a=[""];return H.Children.forEach(e,function(r){var n=a.length-1,t=a[n];Te(r)&&Te(t)?a[n]=""+t+r:r&&r.props&&r.props.children&&a.push(ne(r.props.children))}),a.join("")}var re=globalThis&&globalThis.__assign||function(){return re=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},re.apply(this,arguments)},cr=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),t,i=[],l;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)i.push(t.value)}catch(o){l={error:o}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return i};function ur(e){var a=e.children,r=e.copyable,n=e.editable,t=e.ellipsis,i=e.expanding,l=e.setEditing,o=e.onClickExpand,y=e.forceShowExpand,s=e.isEllipsis,p=e.currentContext,E=p===void 0?{}:p,V=He(),x=E.getPrefixCls,b=E.locale,_=x("typography"),A=cr(f.exports.useState(!1),2),T=A[0],L=A[1],N=f.exports.useRef(null),S=q(r)?r:{},j=q(t)?t:{},v=q(n)?n:{},P=Ge(j.expandNodes)?j.expandNodes:[b.Typography.fold,b.Typography.unfold];f.exports.useEffect(function(){return function(){clearTimeout(N.current),N.current=null}},[]);function F(G){if(!T){var D=S.text!==void 0?S.text:ne(a);ar(D),L(!0),S.onCopy&&S.onCopy(D,G),N.current=setTimeout(function(){L(!1)},3e3)}}var R=function(G){v.onStart&&v.onStart(ne(a),G),l(!0)},d=S.tooltips||[b.Typography.copy,b.Typography.copied],z=r&&u(pe,{content:T?d[1]:d[0],children:u("span",{...re({className:T?_+"-operation-copied":_+"-operation-copy",onClick:F,role:"button","aria-label":d[0],tabIndex:0},V({onPressEnter:F})),children:T?u(qe,{}):S.icon||u(or,{})})}),W=n&&u(pe,{content:b.Typography.edit,children:u("span",{...re({tabIndex:0,"aria-label":b.Typography.edit,role:"button",className:_+"-operation-edit",onClick:R},V({onPressEnter:R})),children:u(sr,{})})}),w=y||j.expandable&&s?u("a",{...re({className:_+"-operation-expand",onClick:o,role:"button",tabIndex:0,"aria-label":b.Typography.unfold},V({onPressEnter:o})),children:i?P[0]:P[1]}):null;return te(Be,{children:[w,W,z]})}function pr(e){var a=e.prefixCls,r=e.children,n=e.setEditing,t=e.editableConfig,i=ae(a+"-typography",a+"-edit-content"),l=ne(r),o=f.exports.useRef(null);f.exports.useEffect(function(){if(o.current&&o.current.focus&&o.current.focus(),o.current&&o.current.dom){var E=o.current.dom.value.length;o.current.dom.setSelectionRange(E,E)}},[]);function y(){n(!1),t.onEnd&&t.onEnd(l)}function s(E){t.onChange&&t.onChange(E)}function p(){y()}return u("div",{className:i,children:u(ze.TextArea,{onBlur:p,ref:o,value:l,autoSize:!0,onChange:s,onPressEnter:y})})}var Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Y.apply(this,arguments)},ee=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),t,i=[],l;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)i.push(t.value)}catch(o){l={error:o}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return i},dr="hxj",m;(function(e){e[e.INIT=0]="INIT",e[e.BEFORE_MEASURE=1]="BEFORE_MEASURE",e[e.MEASURING=2]="MEASURING",e[e.MEASURE_END=3]="MEASURE_END",e[e.NO_NEED_ELLIPSIS=4]="NO_NEED_ELLIPSIS"})(m||(m={}));function fr(e){var a=e.children,r=e.rows,n=r===void 0?1:r,t=e.width,i=e.expanding,l=e.renderMeasureContent,o=e.simpleEllipsis,y=e.onEllipsis,s=e.suffix,p=e.expandNodes,E=e.expandable,V=e.ellipsisStr,x=f.exports.useRef(),b=f.exports.useRef(),_=ee(f.exports.useState([0,0,0]),2),A=_[0],T=_[1],L=ee(f.exports.useState(0),2),N=L[0],S=L[1],j=ee(f.exports.useState(m.NO_NEED_ELLIPSIS),2),v=j[0],P=j[1],F=ee(A,3),R=F[0],d=F[1],z=F[2],W=ee(f.exports.useState(!1),2),w=W[0],G=W[1],D=f.exports.useMemo(function(){return H.Children.toArray(a)},[a]),U=f.exports.useRef(0);Me(function(){y&&y(w)},[w]);var ie=function(c){return Pe(c)||Ie(c)},oe=function(c){var g=0;return c.forEach(function(h){ie?g+=String(h).length:g+=1}),g},I=f.exports.useMemo(function(){return oe(D)},[D]),le=We(function(c){return T(c)}),$=function(c){var g=[],h=0;if(c>=I)return D;for(var C in D){var k=D[C];if(h>=c)return g;var M=ie(k)?String(k).length:1;if(M>c-h)return g.push(String(k).slice(0,c-h)),h=c,g;h+=M,g.push(k)}return g},se=function(){var c,g;if(N){if(v===m.INIT){var h=n*N,C=(c=b.current)===null||c===void 0?void 0:c.offsetHeight,k=C>h;!k||o||i?(P(m.MEASURE_END),G(k),T([0,I,I])):(G(!0),P(m.BEFORE_MEASURE))}else if(v===m.BEFORE_MEASURE){var M=x==null?void 0:x.current.offsetWidth,Q=n*t;if(M>n*t){var K=Math.max(Q/M-.1,0),J=Math.min(Q/M+.1,1),X=Math.floor(K*I),ue=Math.ceil(J*I),$e=Math.floor((X+ue)/2);U.current=$e}P(m.MEASURING)}else if(v===m.MEASURING)if(R!==z-1){var C=(g=b.current)===null||g===void 0?void 0:g.offsetHeight,h=n*N,me=R,ye=z;C<=h?me=d:ye=d;var Ve=Math.floor((ye+me)/2);le([me,Ve,ye])}else le([R,R,R]),P(m.MEASURE_END)}};we(function(){e.rows&&t?(T([0,Math.floor(I/2),I]),P(m.INIT)):P(m.NO_NEED_ELLIPSIS)},[I,o,i,t,s,p,E,V,e.rows]),we(function(){if(x.current&&v===m.INIT){var c=x.current.offsetHeight;S(c)}},[v]),we(function(){se()},[v,d,R,z,N]);var Z={zIndex:-999,position:"fixed",opacity:0,padding:0,margin:0},ge=Y({whiteSpace:"nowrap"},Z),ce=o?Y({textOverflow:"clip"},Z):Z,B;if(v===m.INIT||v===m.BEFORE_MEASURE)B=te("div",{children:[u("div",{ref:x,style:ge,children:v===m.INIT?dr:l(a,!1)}),u("div",{ref:b,style:Y({width:t},ce),children:l(a,w)})]}),B=B.props.children;else if(v===m.MEASURING){var he={height:N*n,overflow:"hidden"};B=te("div",{children:[u("div",{ref:b,style:Y({width:t},ce),children:l($(d),w)}),u("div",{style:he,children:$(U.current)})]}),B=B.props.children}else v===m.MEASURE_END?B=l($(d),w):v===m.NO_NEED_ELLIPSIS&&(B=l(a,!1));return{ellipsisNode:B,isEllipsis:w,measureStatus:v}}var vr=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),t,i=[],l;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)i.push(t.value)}catch(o){l={error:o}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return i},gr=function(e,a){if(typeof window!="undefined"&&window.CSS&&window.CSS.supports)return be(a)?window.CSS.supports(e):window.CSS.supports(e,a);if(typeof document!="undefined"&&document.createElement){var r=document.createElement("div");return r.setAttribute("style",e+":"+a+";"),typeof r.style[e]!="undefined"}return!1},hr={display:" -webkit-box","-webkit-line-clamp":2},mr=function(){return Object.entries(hr).every(function(e){var a=vr(e,2),r=a[0],n=a[1];return gr(r,n)})};function yr(e){var a=e.cssEllipsis,r=e.ellipsisStr,n=r===void 0?"...":r,t=e.suffix,i=e.rows,l=f.exports.useMemo(function(){return!a||i>1&&!mr()?!1:n==="..."&&!t},[n,a,i,t]),o={textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},y={textOverflow:"ellipsis",whiteSpace:"normal",overflow:"hidden",WebkitLineClamp:""+e.rows,WebkitBoxOrient:"vertical",display:"-webkit-box"};return{simpleEllipsis:l,ellipsisStyle:l?e.rows>1?y:o:{}}}var O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},O.apply(this,arguments)},wr=globalThis&&globalThis.__rest||function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r},Ee=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),t,i=[],l;try{for(;(a===void 0||a-- >0)&&!(t=n.next()).done;)i.push(t.value)}catch(o){l={error:o}}finally{try{t&&!t.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return i};function Er(e,a){var r=e.type,n=e.bold,t=e.disabled,i=e.mark,l=e.underline,o=e.delete,y=e.code,s=[],p=[];return r&&p.push(a+"-"+r),t&&p.push(a+"-disabled"),n&&s.push("b"),l&&s.push("u"),o&&s.push("del"),y&&s.push("code"),i&&s.push("mark"),{component:s,className:p}}function Se(e){var a=e.componentType,r=e.style,n=e.className,t=e.children,i=e.editable,l=e.ellipsis,o=e.heading,y=e.blockquote,s=wr(e,["componentType","style","className","children","editable","ellipsis","heading","blockquote"]),p=f.exports.useContext(fe),E=p.getPrefixCls,V=p.rtl,x=E("typography"),b=Er(e,x),_=b.component,A=b.className,T=Ee(f.exports.useState(!1),2),L=T[0],N=T[1],S=Ee(f.exports.useState(0),2),j=S[0],v=S[1],P=f.exports.useRef(0),F=q(i)?i:{},R="editing"in F?F.editing:L,d=l?O({rows:1,ellipsisStr:"...",cssEllipsis:!1},q(l)?l:{}):{},z=d.wrapper||H.Fragment,W=Ee(Ue(!1,{defaultValue:d.defaultExpanded,value:d.expanded}),2),w=W[0],G=W[1],D=yr(d),U=D.simpleEllipsis,ie=D.ellipsisStyle,oe=function(c,g){var h=be(d.ellipsisStr)?"...":d.ellipsisStr,C=!be(d.suffix)&&d.suffix;return te(z,{children:[c,g&&!w&&!U?h:"",C,ge(g)]})},I=fr(O(O({},d),{children:t,expanding:w,width:j,renderMeasureContent:oe,simpleEllipsis:U||w})),le=I.ellipsisNode,$=I.isEllipsis,se=I.measureStatus,Z=function(c){var g=(c==null?void 0:c[0]).contentRect,h=+new Date,C=h-P.current;if(g){var k=_.includes("code")?g.width-18:g.width,M=[m.NO_NEED_ELLIPSIS,m.MEASURE_END];M.includes(se)&&C>100&&(P.current=h,v(k))}};function ge(c){return u(Be,{children:u(ur,{...O({},e,{setEditing:N,onClickExpand:ce,expanding:w,isEllipsis:c,currentContext:p})})})}function ce(c){G(!w),e.onClickExpand&&e.onClickExpand(c),d.onExpand&&d.onExpand(!w,c)}Me(function(){d.onEllipsis&&d.onEllipsis($)},[$]);function B(c,g,h,C){C===void 0&&(C={});var k=c;return g.forEach(function(M,Q){var K=Q===0?C:{},J=q(h.mark)&&h.mark.color?O({style:{backgroundColor:h.mark.color}},K):O({},K);k=H.createElement(M,O({},J),k)}),k}function he(){var c,g=ne(H.Children.toArray(t)),h=d.showTooltip,C=q(d.showTooltip)&&d.showTooltip.type==="popover"?"popover":"tooltip",k=q(d.showTooltip)?d.showTooltip.props||{}:{},M=C==="popover"?Je:pe,Q=$&&!h&&!w?{title:g}:{},K=O({style:r},Q),J=$&&h&&!w,X;a==="Paragraph"?X=y?"blockquote":"div":a==="Title"?X="h"+o:a==="Text"&&(X=l?"div":"span");var ue=u(Qe,{onResize:Z,children:u(X,{...O({className:ae(x,A,(c={},c[x+"-rtl"]=V,c),n)},K,Ke(s,["spacing","type","close","bold","disabled","mark","underline","delete","code","copyable","isEllipsis","expanding","onClickExpand","setEditing","forceShowExpand"])),children:U&&se!==m.INIT&&!w&&$?B(oe(u("span",{style:ie,children:t}),$),_.length?_:["span"],e,{className:x+"-simple-ellipsis"}):B(le,_,e)})});return J?u(M,{...O({content:g},k),children:u("span",{children:ue})}):ue}return R?u(pr,{...O({},e,{prefixCls:x,setEditing:N,editableConfig:F})}):he()}var xe=globalThis&&globalThis.__assign||function(){return xe=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},xe.apply(this,arguments)},br=globalThis&&globalThis.__rest||function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(r[n[t]]=e[n[t]]);return r};function Ae(e){var a=e.heading,r=a===void 0?1:a,n=br(e,["heading"]);return H.createElement(Se,xe({heading:r},n,{componentType:"Title"}))}Ae.displayName="Title";var Ce=globalThis&&globalThis.__assign||function(){return Ce=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Ce.apply(this,arguments)};function je(e){return H.createElement(Se,Ce({},e,{componentType:"Text"}))}je.displayName="Text";var ke=globalThis&&globalThis.__assign||function(){return ke=Object.assign||function(e){for(var a,r=1,n=arguments.length;r<n;r++){a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},ke.apply(this,arguments)};function Fe(e){var a=e.spacing,r=a===void 0?"default":a,n=e.className,t=f.exports.useContext(fe).getPrefixCls,i=t("typography"),l=r==="close"?ae(i+"-spacing-close",n):n;return u(Se,{...ke({},e,{componentType:"Paragraph",className:l})})}Fe.displayName="Paragraph";var ve=rr;ve.Title=Ae;ve.Text=je;ve.Paragraph=Fe;var Cr=ve;const kr={"en-US":{"workplace.welcomeBack":"Welcome Back,","workplace.totalOnlyData":"Total online data","workplace.contentInMarket":"Content in market","workplace.comments":"Comments","workplace.growth":"Growth","workplace.contentData":"Content Data","workplace.1year":"Nearly 1 Year","workplace.seeMore":"See More","workplace.popularContents":"Popular Contents","workplace.text":"Text","workplace.image":"Image","workplace.video":"Video","workplace.column.rank":"Rank","workplace.column.title":"Title","workplace.column.pv":"PV","workplace.column.increase":"Daily Increase","workplace.contentPercentage":"Percentage of content categories","workplace.shortcuts":"Shortcuts","workplace.manage":"Manage","workplace.contentMgmt":"Management","workplace.contentStatistic":"Statistic","workplace.advancedMgmt":"Advance","workplace.onlinePromotion":"Promotion","workplace.marketing":"Marketing","workplace.recent":"Recent","workplace.announcement":"Announcement","workplace.activity":"Activity","workplace.info":"Info","workplace.notice":"Notice","workplace.docs":"Document","workplace.pecs":"pecs","workplace.designLab":"DesignLab","workplace.materialMarket":"MaterialMarket","workplace.react":"React Quick Start","workplace.vue":"Vue Quick Start"},"zh-CN":{"workplace.welcomeBack":"\u6B22\u8FCE\u56DE\u6765\uFF0C","workplace.totalOnlyData":"\u7EBF\u4E0A\u603B\u6570\u636E","workplace.contentInMarket":"\u6295\u653E\u4E2D\u7684\u5185\u5BB9","workplace.comments":"\u65E5\u65B0\u589E\u8BC4\u8BBA","workplace.growth":"\u8F83\u6628\u65E5\u65B0\u589E","workplace.contentData":"\u5185\u5BB9\u6570\u636E","workplace.1year":"\u8FD11\u5E74","workplace.seeMore":"\u67E5\u770B\u66F4\u591A","workplace.popularContents":"\u7EBF\u4E0A\u70ED\u95E8\u5185\u5BB9","workplace.text":"\u6587\u672C","workplace.image":"\u56FE\u6587","workplace.video":"\u89C6\u9891","workplace.column.rank":"\u6392\u540D","workplace.column.title":"\u5185\u5BB9\u6807\u9898","workplace.column.pv":"\u70B9\u51FB\u91CF","workplace.column.increase":"\u65E5\u6DA8\u5E45","workplace.contentPercentage":"\u5185\u5BB9\u7C7B\u522B\u5360\u6BD4","workplace.shortcuts":"\u5FEB\u6377\u5165\u53E3","workplace.manage":"\u7BA1\u7406","workplace.contentMgmt":"\u5185\u5BB9\u7BA1\u7406","workplace.contentStatistic":"\u5185\u5BB9\u6570\u636E","workplace.advancedMgmt":"\u9AD8\u7EA7\u7BA1\u7406","workplace.onlinePromotion":"\u7EBF\u4E0A\u63A8\u5E7F","workplace.marketing":"\u5185\u5BB9\u6295\u653E","workplace.recent":"\u6700\u8FD1\u8BBF\u95EE","workplace.announcement":"\u516C\u544A","workplace.activity":"\u6D3B\u52A8","workplace.info":"\u6D88\u606F","workplace.notice":"\u901A\u77E5","workplace.docs":"\u6587\u6863\u4E2D\u5FC3","workplace.pecs":"\u4E2A","workplace.designLab":"\u98CE\u683C\u914D\u7F6E\u5E73\u53F0","workplace.materialMarket":"\u7269\u6599\u5E02\u573A","workplace.react":"React \u7EC4\u4EF6\u5E93","workplace.vue":"Vue \u7EC4\u4EF6\u5E93"}};export{Cr as T,kr as i};