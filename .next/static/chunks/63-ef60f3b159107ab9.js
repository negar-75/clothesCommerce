(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63],{9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,r=n(2648).Z,a=n(1598).Z,o=n(7273).Z,l=a(n(7294)),s=r(n(3121)),d=n(2675),u=n(139),c=n(8730);n(7238);var f=r(n(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,r,a,o,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;r.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:s,className:d,imgStyle:u,blurStyle:c,isLazy:f,fill:g,placeholder:m,loading:p,srcString:v,config:y,unoptimized:w,loader:b,onLoadRef:E,onLoadingCompleteRef:C,setBlurComplete:x,setShowAltText:S,onLoad:j,onError:z}=e,_=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,n,{width:a,height:r,decoding:"async","data-nimg":g?"fill":"1",className:d,loading:p,style:i({},u,c),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&h(e,v,m,E,C,x,w))},[v,m,E,C,x,z,w,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,m,E,C,x,w)},onError:e=>{S(!0),"blur"===m&&x(!0),z&&z(e)}})))}),y=l.forwardRef((e,t)=>{let n,r;var a,{src:h,sizes:y,unoptimized:w=!1,priority:b=!1,loading:E,className:C,quality:x,width:S,height:j,fill:z,style:_,onLoad:k,onLoadingComplete:R,placeholder:O="empty",blurDataURL:N,layout:I,objectFit:P,objectPosition:A,lazyBoundary:L,lazyRoot:q}=e,M=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(c.ImageConfigContext),D=l.useMemo(()=>{let e=g||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[B]),F=M,W=F.loader||f.default;delete F.loader;let T="__next_img_default"in W;if(T){if("custom"===D.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let Z=W;W=e=>{let{config:t}=e,n=o(e,["config"]);return Z(n)}}if(I){"fill"===I&&(z=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];G&&(_=i({},_,G));let H={responsive:"100vw",fill:"100vw"}[I];H&&!y&&(y=H)}let U="",V=p(S),J=p(j);if("object"==typeof(a=h)&&(m(a)||void 0!==a.src)){let X=m(h)?h.default:h;if(!X.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(!X.height||!X.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)));if(n=X.blurWidth,r=X.blurHeight,N=N||X.blurDataURL,U=X.src,!z){if(V||J){if(V&&!J){let $=V/X.width;J=Math.round(X.height*$)}else if(!V&&J){let K=J/X.height;V=Math.round(X.width*K)}}else V=X.width,J=X.height}}let Q=!b&&("lazy"===E||void 0===E);((h="string"==typeof h?h:U).startsWith("data:")||h.startsWith("blob:"))&&(w=!0,Q=!1),D.unoptimized&&(w=!0),T&&h.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(w=!0);let[Y,ee]=l.useState(!1),[et,en]=l.useState(!1),ei=p(x),er=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:A}:{},et?{}:{color:"transparent"},_),ea="blur"===O&&N&&!Y?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:n,blurHeight:r,blurDataURL:N}),'")')}:{},eo=function(e){let{config:t,src:n,unoptimized:i,width:r,quality:a,sizes:o,loader:l}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,n){let{deviceSizes:i,allSizes:r}=e;if(n){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let l;l=a.exec(n);l)o.push(parseInt(l[2]));if(o.length){let s=.01*Math.min(...o);return{widths:r.filter(e=>e>=i[0]*s),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let d=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:d,kind:"x"}}(t,r,o),u=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:n,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)).join(", "),src:l({config:t,src:n,quality:a,width:s[u]})}}({config:D,src:h,unoptimized:w,width:V,quality:ei,sizes:y,loader:W}),el=h,es={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:F.crossOrigin},ed=l.useRef(k);l.useEffect(()=>{ed.current=k},[k]);let eu=l.useRef(R);l.useEffect(()=>{eu.current=R},[R]);let ec=i({isLazy:Q,imgAttributes:eo,heightInt:J,widthInt:V,qualityInt:ei,className:C,imgStyle:er,blurStyle:ea,loading:E,config:D,fill:z,unoptimized:w,placeholder:O,loader:W,srcString:el,onLoadRef:ed,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:en},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ec,{ref:t})),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},es))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:r,blurDataURL:a}=e,o=i||t,l=r||n,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&r?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)},7005:function(e,t,n){var i=n(7294),r=i&&"object"==typeof i&&"default"in i?i:{default:i},a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'),t.Z=function(e){var t,n,o,l,s=e.style,d=e.className,u=e.play,c=void 0===u||u,f=e.pauseOnHover,g=void 0!==f&&f,m=e.pauseOnClick,p=void 0!==m&&m,h=e.direction,v=void 0===h?"left":h,y=e.speed,w=void 0===y?20:y,b=e.delay,E=void 0===b?0:b,C=e.loop,x=void 0===C?0:C,S=e.gradient,j=e.gradientColor,z=void 0===j?[255,255,255]:j,_=e.gradientWidth,k=void 0===_?200:_,R=e.onFinish,O=e.onCycleComplete,N=e.children,I=i.useState(0),P=I[0],A=I[1],L=i.useState(0),q=L[0],M=L[1],B=i.useState(!1),D=B[0],F=B[1],W=i.useRef(null),T=i.useRef(null);i.useEffect(function(){if(D){var e=function(){T.current&&W.current&&(A(W.current.getBoundingClientRect().width),M(T.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}},[D]),i.useEffect(function(){F(!0)},[]);var Z="rgba("+z[0]+", "+z[1]+", "+z[2],G=q<P?P/w:q/w;return r.default.createElement(i.Fragment,null,D?r.default.createElement("div",{ref:W,style:a(a({},void 0===s?{}:s),((t={})["--pause-on-hover"]=!c||g?"paused":"running",t["--pause-on-click"]=!c||g&&!p||p?"paused":"running",t)),className:(void 0===d?"":d)+" marquee-container"},(void 0===S||S)&&r.default.createElement("div",{style:((n={})["--gradient-color"]=Z+", 1), "+Z+", 0)",n["--gradient-width"]="number"==typeof k?k+"px":k,n),className:"overlay"}),r.default.createElement("div",{ref:T,style:((o={})["--play"]=c?"running":"paused",o["--direction"]="left"===v?"normal":"reverse",o["--duration"]=G+"s",o["--delay"]=E+"s",o["--iteration-count"]=x?""+x:"infinite",o),className:"marquee",onAnimationIteration:O,onAnimationEnd:R},N),r.default.createElement("div",{style:((l={})["--play"]=c?"running":"paused",l["--direction"]="left"===v?"normal":"reverse",l["--duration"]=G+"s",l["--delay"]=E+"s",l["--iteration-count"]=x?""+x:"infinite",l),className:"marquee","aria-hidden":"true"},N)):null)}}}]);