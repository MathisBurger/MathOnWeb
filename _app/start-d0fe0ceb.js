var at=Object.defineProperty,nt=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var G=(r,t,e)=>t in r?at(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,k=(r,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(r,e,t[e]);if(U)for(var e of U(t))x.call(t,e)&&G(r,e,t[e]);return r},W=(r,t)=>nt(r,ot(t));var X=(r,t)=>{var e={};for(var s in r)J.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&U)for(var s of U(r))t.indexOf(s)<0&&x.call(r,s)&&(e[s]=r[s]);return e};import{S as lt,i as ct,s as ut,e as ft,c as ht,a as dt,d as $,b as N,f as L,t as _t,g as pt,h as gt,j as A,k as mt,l as y,m as C,n as vt,o as j,p as Y,q as B,r as S,u as E,v as T,w as V,x as v,y as bt,z as wt,A as yt,B as K,C as M}from"./chunks/vendor-894bca97.js";import{_}from"./chunks/preload-helper-ec9aa979.js";function F(r){let t,e,s;const i=[r[2]||{}];var n=r[0][1];function a(o){let l={$$slots:{default:[Et]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return n&&(t=new n(a(r))),{c(){t&&A(t.$$.fragment),e=y()},l(o){t&&C(t.$$.fragment,o),e=y()},m(o,l){t&&j(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&4?Y(i,[B(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),n!==(n=o[0][1])){if(t){S();const f=t;E(f.$$.fragment,1,0,()=>{T(f,1)}),V()}n?(t=new n(a(o)),A(t.$$.fragment),v(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else n&&t.$set(c)},i(o){s||(t&&v(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&T(t,o)}}}function Q(r){let t,e,s;const i=[r[3]||{}];var n=r[0][2];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return n&&(t=new n(a())),{c(){t&&A(t.$$.fragment),e=y()},l(o){t&&C(t.$$.fragment,o),e=y()},m(o,l){t&&j(t,o,l),L(o,e,l),s=!0},p(o,l){const c=l&8?Y(i,[B(o[3]||{})]):{};if(n!==(n=o[0][2])){if(t){S();const f=t;E(f.$$.fragment,1,0,()=>{T(f,1)}),V()}n?(t=new n(a()),A(t.$$.fragment),v(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else n&&t.$set(c)},i(o){s||(t&&v(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&$(e),t&&T(t,o)}}}function Et(r){let t,e,s=r[0][2]&&Q(r);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,n){s&&s.m(i,n),L(i,t,n),e=!0},p(i,n){i[0][2]?s?(s.p(i,n),n&1&&v(s,1)):(s=Q(i),s.c(),v(s,1),s.m(t.parentNode,t)):s&&(S(),E(s,1,1,()=>{s=null}),V())},i(i){e||(v(s),e=!0)},o(i){E(s),e=!1},d(i){s&&s.d(i),i&&$(t)}}}function Rt(r){let t,e,s=r[0][1]&&F(r);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,n){s&&s.m(i,n),L(i,t,n),e=!0},p(i,n){i[0][1]?s?(s.p(i,n),n&1&&v(s,1)):(s=F(i),s.c(),v(s,1),s.m(t.parentNode,t)):s&&(S(),E(s,1,1,()=>{s=null}),V())},i(i){e||(v(s),e=!0)},o(i){E(s),e=!1},d(i){s&&s.d(i),i&&$(t)}}}function Z(r){let t,e=r[5]&&tt(r);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var i=dt(t);e&&e.l(i),i.forEach($),this.h()},h(){N(t,"id","svelte-announcer"),N(t,"aria-live","assertive"),N(t,"aria-atomic","true"),N(t,"class","svelte-1j55zn5")},m(s,i){L(s,t,i),e&&e.m(t,null)},p(s,i){s[5]?e?e.p(s,i):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&$(t),e&&e.d()}}}function tt(r){let t;return{c(){t=_t(r[6])},l(e){t=pt(e,r[6])},m(e,s){L(e,t,s)},p(e,s){s&64&&gt(t,e[6])},d(e){e&&$(t)}}}function $t(r){let t,e,s,i;const n=[r[1]||{}];var a=r[0][0];function o(c){let f={$$slots:{default:[Rt]},$$scope:{ctx:c}};for(let d=0;d<n.length;d+=1)f=K(f,n[d]);return{props:f}}a&&(t=new a(o(r)));let l=r[4]&&Z(r);return{c(){t&&A(t.$$.fragment),e=mt(),l&&l.c(),s=y()},l(c){t&&C(t.$$.fragment,c),e=vt(c),l&&l.l(c),s=y()},m(c,f){t&&j(t,c,f),L(c,e,f),l&&l.m(c,f),L(c,s,f),i=!0},p(c,[f]){const d=f&2?Y(n,[B(c[1]||{})]):{};if(f&525&&(d.$$scope={dirty:f,ctx:c}),a!==(a=c[0][0])){if(t){S();const h=t;E(h.$$.fragment,1,0,()=>{T(h,1)}),V()}a?(t=new a(o(c)),A(t.$$.fragment),v(t.$$.fragment,1),j(t,e.parentNode,e)):t=null}else a&&t.$set(d);c[4]?l?l.p(c,f):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){i||(t&&v(t.$$.fragment,c),i=!0)},o(c){t&&E(t.$$.fragment,c),i=!1},d(c){t&&T(t,c),c&&$(e),l&&l.d(c),c&&$(s)}}}function kt(r,t,e){let{stores:s}=t,{page:i}=t,{components:n}=t,{props_0:a=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),wt(s.page.notify);let c=!1,f=!1,d=null;return yt(()=>{const h=s.page.subscribe(()=>{c&&(e(5,f=!0),e(6,d=document.title||"untitled page"))});return e(4,c=!0),h}),r.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,i=h.page),"components"in h&&e(0,n=h.components),"props_0"in h&&e(1,a=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[n,a,o,l,c,f,d,s,i]}class Lt extends lt{constructor(t){super();ct(this,t,kt,$t,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const u=[()=>_(()=>import("./pages/__layout.svelte-928e3629.js"),["pages/__layout.svelte-928e3629.js","assets/pages/__layout.svelte-d95cc91d.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/preload-helper-ec9aa979.js"]),()=>_(()=>import("./pages/__error.svelte-c113e1c7.js"),["pages/__error.svelte-c113e1c7.js","assets/pages/__error.svelte-8acb92b8.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/index.svelte-dccba711.js"),["pages/index.svelte-dccba711.js","assets/pages/index.svelte-e4e52dc5.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/infinite-clicker.svelte-7d1e6124.js"),["pages/infinite-clicker.svelte-7d1e6124.js","assets/pages/infinite-clicker.svelte-4ec411b3.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/stochastics/index.svelte-ddc24a78.js"),["pages/stochastics/index.svelte-ddc24a78.js","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/listSelector-442aada4.js","assets/listSelector-c68a0e62.css"]),()=>_(()=>import("./pages/stochastics/4-field-table-completer.svelte-51650ae3.js"),["pages/stochastics/4-field-table-completer.svelte-51650ae3.js","assets/pages/stochastics/4-field-table-completer.svelte-d651943d.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/snackbar-96a8ffa5.js","assets/snackbar-351a5da8.css","chunks/custom-math-d14d206d.js"]),()=>_(()=>import("./pages/stochastics/benulli-calculator.svelte-e9e742bb.js"),["pages/stochastics/benulli-calculator.svelte-e9e742bb.js","assets/pages/stochastics/benulli-calculator.svelte-1e4e599c.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/ncr-calculator-b8391fd4.js","chunks/custom-math-d14d206d.js"]),()=>_(()=>import("./pages/stochastics/ncr-calculator.svelte-ce592092.js"),["pages/stochastics/ncr-calculator.svelte-ce592092.js","assets/pages/stochastics/ncr-calculator.svelte-7c21c718.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/ncr-calculator-b8391fd4.js","chunks/custom-math-d14d206d.js"]),()=>_(()=>import("./pages/privacy.svelte-8c27089a.js"),["pages/privacy.svelte-8c27089a.js","assets/pages/privacy.svelte-db404e01.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/vector/index.svelte-cb69d224.js"),["pages/vector/index.svelte-cb69d224.js","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/listSelector-442aada4.js","assets/listSelector-c68a0e62.css"]),()=>_(()=>import("./pages/vector/triangle-angle-calculator.svelte-4839a037.js"),["pages/vector/triangle-angle-calculator.svelte-4839a037.js","assets/pages/vector/triangle-angle-calculator.svelte-0931cb8c.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/angle-calculator-72fac1a5.js","chunks/custom-math-d14d206d.js","chunks/vector-dependency-eabd3094.js"]),()=>_(()=>import("./pages/vector/layer-type-calculator.svelte-c55f8c39.js"),["pages/vector/layer-type-calculator.svelte-c55f8c39.js","assets/pages/vector/layer-type-calculator.svelte-35c97e5e.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/angle-calculator-72fac1a5.js","chunks/custom-math-d14d206d.js"]),()=>_(()=>import("./pages/vector/check-vector-on-line.svelte-06974eea.js"),["pages/vector/check-vector-on-line.svelte-06974eea.js","assets/pages/vector/check-vector-on-line.svelte-bc6afc4c.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/vector-dependency-eabd3094.js","chunks/defaults-provider-d622454b.js"]),()=>_(()=>import("./pages/vector/angle-calculator.svelte-25b03f33.js"),["pages/vector/angle-calculator.svelte-25b03f33.js","assets/pages/vector/angle-calculator.svelte-bdbd1746.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/angle-calculator-72fac1a5.js","chunks/custom-math-d14d206d.js","chunks/defaults-provider-d622454b.js"]),()=>_(()=>import("./pages/vector/linear-checker.svelte-a65a848a.js"),["pages/vector/linear-checker.svelte-a65a848a.js","assets/pages/vector/angle-calculator.svelte-bdbd1746.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/vector-dependency-eabd3094.js"]),()=>_(()=>import("./pages/vector/generate-line.svelte-ef851456.js"),["pages/vector/generate-line.svelte-ef851456.js","assets/pages/vector/angle-calculator.svelte-bdbd1746.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/vector-input-c960c268.js","assets/vector-input-16594ac5.css","chunks/vector-dependency-eabd3094.js"]),()=>_(()=>import("./pages/basic/index.svelte-6d7b6daa.js"),["pages/basic/index.svelte-6d7b6daa.js","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/listSelector-442aada4.js","assets/listSelector-c68a0e62.css"]),()=>_(()=>import("./pages/basic/triangle-completer.svelte-383b28db.js"),["pages/basic/triangle-completer.svelte-383b28db.js","assets/pages/basic/triangle-completer.svelte-ac5e110d.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/defaults-provider-d622454b.js","chunks/snackbar-96a8ffa5.js","assets/snackbar-351a5da8.css"]),()=>_(()=>import("./pages/basic/function-solver.svelte-7631239e.js"),["pages/basic/function-solver.svelte-7631239e.js","assets/pages/basic/function-solver.svelte-a96dacef.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/snackbar-96a8ffa5.js","assets/snackbar-351a5da8.css","chunks/custom-math-d14d206d.js"]),()=>_(()=>import("./pages/basic/calculator.svelte-ca4a98a1.js"),["pages/basic/calculator.svelte-ca4a98a1.js","assets/pages/basic/calculator.svelte-72cf5301.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/basic/logarithm.svelte-f860366a.js"),["pages/basic/logarithm.svelte-f860366a.js","assets/pages/basic/logarithm.svelte-a5477c95.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css"]),()=>_(()=>import("./pages/basic/faculty.svelte-f3069b10.js"),["pages/basic/faculty.svelte-f3069b10.js","assets/pages/basic/logarithm.svelte-a5477c95.css","chunks/vendor-894bca97.js","assets/vendor-ec9510ad.css","chunks/custom-math-d14d206d.js"])],Ot=[[/^\/$/,[u[0],u[2]],[u[1]]],[/^\/infinite-clicker\/?$/,[u[0],u[3]],[u[1]]],[/^\/stochastics\/?$/,[u[0],u[4]],[u[1]]],[/^\/stochastics\/4-field-table-completer\/?$/,[u[0],u[5]],[u[1]]],[/^\/stochastics\/benulli-calculator\/?$/,[u[0],u[6]],[u[1]]],[/^\/stochastics\/ncr-calculator\/?$/,[u[0],u[7]],[u[1]]],[/^\/privacy\/?$/,[u[0],u[8]],[u[1]]],[/^\/vector\/?$/,[u[0],u[9]],[u[1]]],[/^\/vector\/triangle-angle-calculator\/?$/,[u[0],u[10]],[u[1]]],[/^\/vector\/layer-type-calculator\/?$/,[u[0],u[11]],[u[1]]],[/^\/vector\/check-vector-on-line\/?$/,[u[0],u[12]],[u[1]]],[/^\/vector\/angle-calculator\/?$/,[u[0],u[13]],[u[1]]],[/^\/vector\/linear-checker\/?$/,[u[0],u[14]],[u[1]]],[/^\/vector\/generate-line\/?$/,[u[0],u[15]],[u[1]]],[/^\/basic\/?$/,[u[0],u[16]],[u[1]]],[/^\/basic\/triangle-completer\/?$/,[u[0],u[17]],[u[1]]],[/^\/basic\/function-solver\/?$/,[u[0],u[18]],[u[1]]],[/^\/basic\/calculator\/?$/,[u[0],u[19]],[u[1]]],[/^\/basic\/logarithm\/?$/,[u[0],u[20]],[u[1]]],[/^\/basic\/faculty\/?$/,[u[0],u[21]],[u[1]]]],At=[u[0](),u[1]()];function jt(r){let t=r.baseURI;if(!t){const e=r.getElementsByTagName("base");t=e.length?e[0].href:r.URL}return t}let et="";function Tt(r){et=r.base,r.assets}function z(){return{x:pageXOffset,y:pageYOffset}}function st(r){for(;r&&r.nodeName.toUpperCase()!=="A";)r=r.parentNode;return r}function rt(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}class Pt{constructor({base:t,routes:e,trailing_slash:s,renderer:i}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=i,i.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const n=W(k({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(n,document.title,window.location.href)},200)});const e=n=>{const a=st(n.target);a&&a.href&&a.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(a))};let s;const i=n=>{clearTimeout(s),s=setTimeout(()=>{e(n)},20)};addEventListener("touchstart",e),addEventListener("mousemove",i),addEventListener("click",n=>{if(!this.enabled||n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=st(n.target);if(!a||!a.href)return;const o=rt(a),l=o.toString();if(l===location.href){location.hash||n.preventDefault();return}const c=(a.getAttribute("rel")||"").split(/\s+/);if(a.hasAttribute("download")||c&&c.includes("external")||(a instanceof SVGAElement?a.target.baseVal:a.target)||!this.owns(o))return;const f=a.hasAttribute("sveltekit:noscroll"),d=l.indexOf("#"),h=location.href.indexOf("#"),b=d>=0?l.substring(0,d):l,R=h>=0?location.href.substring(0,h):location.href;history.pushState({},"",o.href),b===R&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,f?z():null,!1,[],o.hash),n.preventDefault()}),addEventListener("popstate",n=>{if(n.state&&this.enabled){const a=new URL(location.href);this._navigate(a,n.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),i=this.routes.filter(([o])=>o.test(s)),n=new URLSearchParams(t.search);return{id:`${e}?${n}`,routes:i,path:e,decoded_path:s,query:n}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:i=!1,state:n={}}={},a){const o=new URL(t,jt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](n,"",t),this._navigate(o,e?z():null,i,a,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,i,n){const a=this.parse(t);if(!a)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,a.path!=="/"){const o=a.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(a.path.split("/").pop()||"").includes("."))&&(a.path=o?a.path.slice(0,-1):a.path+"/",history.replaceState({},"",`${this.base}${a.path}${location.search}`))}await this.renderer.handle_navigation(a,i,!1,{hash:n,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function it(r){return r instanceof Error||r&&r.name&&r.message?r:new Error(JSON.stringify(r))}function It(r){let t=5381,e=r.length;if(typeof r=="string")for(;e;)t=t*33^r.charCodeAt(--e);else for(;e;)t=t*33^r[--e];return(t>>>0).toString(36)}function St(r){const t=r.status&&r.status>=400&&r.status<=599&&!r.redirect;if(r.error||t){const e=r.status;if(!r.error&&t)return{status:e||500,error:new Error};const s=typeof r.error=="string"?new Error(r.error):r.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(r.redirect){if(!r.status||Math.floor(r.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof r.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(r.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return r}function Vt(r){const t=M(r);let e=!0;function s(){e=!0,t.update(a=>a)}function i(a){e=!1,t.set(a)}function n(a){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&a(o=l)})}return{notify:s,set:i,subscribe:n}}function qt(r,t){const e=typeof r=="string"?r:r.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${It(t.body)}"]`);const i=document.querySelector(s);if(i&&i.textContent){const n=JSON.parse(i.textContent),{body:a}=n,o=X(n,["body"]);return Promise.resolve(new Response(a,o))}return fetch(r,t)}class Dt{constructor({Root:t,fallback:e,target:s,session:i,host:n}){this.Root=t,this.fallback=e,this.host=n,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Vt({}),navigating:M(null),session:M(i)},this.$session=null,this.root=null;let a=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!a||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),a=!0}async start({status:t,error:e,nodes:s,page:i}){const n=[];let a={},o,l;try{for(let c=0;c<s.length;c+=1){const f=c===s.length-1,d=await this._load_node({module:await s[c],page:i,stuff:a,status:f?t:void 0,error:f?e:void 0});if(n.push(d),d&&d.loaded)if(d.loaded.error){if(e)throw d.loaded.error;l={status:d.loaded.status,error:d.loaded.error,path:i.path,query:i.query}}else d.loaded.stuff&&(a=k(k({},a),d.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:i,branch:n})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:it(c),path:i.path,query:i.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,i){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,i)}async update(t,e,s,i){const n=this.token={};let a=await this._get_navigation_result(t,s);if(n!==this.token)return;if(this.invalid.clear(),a.redirect)if(e.length>10||e.includes(t.path))a=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(a.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(a.redirect,location.href).href;return}if(a.reload?location.reload():this.started?(this.current=a.state,this.root.$set(a.props),this.stores.navigating.set(null)):this._init(a),!i)await 0;else{const{hash:l,scroll:c,keepfocus:f}=i;f||document.body.focus();const d=pageYOffset;await 0;const h=document.body.scrollHeight-innerHeight;if(pageYOffset===Math.min(d,h)){const b=l&&document.getElementById(l.slice(1));c?scrollTo(c.x,c.y):b?b.scrollIntoView():scrollTo(0,0)}}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=a.state.branch[a.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:k({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const i=t.routes[s];let n=s+1;for(;n<t.routes.length;){const o=t.routes[n];if(o[0].toString()===i[0].toString())o[1].forEach(l=>l()),n+=1;else break}const a=await this._load({route:i,info:t},e);if(a)return a}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),i=s.find(l=>l.loaded&&l.loaded.redirect),n={redirect:i&&i.loaded?i.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;n.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(n.props.page=t);const a=s[s.length-1],o=a.loaded&&a.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const f=()=>{this.cache.get(l)===n&&this.cache.delete(l),h(),clearTimeout(d)},d=setTimeout(f,o*1e3),h=this.stores.session.subscribe(()=>{c&&f()});c=!0,this.cache.set(l,n)}return n}async _load_node({status:t,error:e,module:s,page:i,stuff:n}){const a={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:n},o={};for(const c in i.params)Object.defineProperty(o,c,{get(){return a.uses.params.add(c),i.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,f={page:{host:i.host,params:o,get path(){return a.uses.path=!0,i.path},get query(){return a.uses.query=!0,i.query}},get session(){return a.uses.session=!0,l},get stuff(){return a.uses.stuff=!0,k({},n)},fetch(h,b){const R=typeof h=="string"?h:h.url,{href:P}=new URL(R,new URL(i.path,document.baseURI));return a.uses.dependencies.push(P),c?fetch(h,b):qt(h,b)}};e&&(f.status=t,f.error=e);const d=await s.load.call(null,f);if(!d)return;a.loaded=St(d),a.loaded.stuff&&(a.stuff=a.loaded.stuff)}return a}async _load({route:t,info:{path:e,decoded_path:s,query:i}},n){const a=`${s}?${i}`;if(!n){const p=this.cache.get(a);if(p)return p}const[o,l,c,f]=t,d=f?f(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(d).filter(p=>this.current.page.params[p]!==d[p]),query:i.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},b={host:this.host,path:e,query:i,params:d};let R=[],P={},H=!1,q=200,I;l.forEach(p=>p());t:for(let p=0;p<l.length;p+=1){let g;try{if(!l[p])continue;const w=await l[p](),m=this.current.branch[p];if(!m||w!==m.module||h.path&&m.uses.path||h.params.some(O=>m.uses.params.has(O))||h.query&&m.uses.query||h.session&&m.uses.session||m.uses.dependencies.some(O=>this.invalid.has(O))||H&&m.uses.stuff){g=await this._load_node({module:w,page:b,stuff:P});const O=p===l.length-1;if(g&&g.loaded){if(g.loaded.error&&(q=g.loaded.status,I=g.loaded.error),g.loaded.redirect)return{redirect:g.loaded.redirect,props:{},state:this.current};g.loaded.stuff&&(H=!0)}else if(O&&w.load)return}else g=m}catch(w){q=500,I=it(w)}if(I){for(;p--;)if(c[p]){let w,m,D=p;for(;!(m=R[D]);)D-=1;try{if(w=await this._load_node({status:q,error:I,module:await c[p](),page:b,stuff:m.stuff}),w&&w.loaded&&w.loaded.error)continue;R=R.slice(0,D+1).concat(w);break t}catch{continue}}return await this._load_error({status:q,error:I,path:e,query:i})}else g&&g.loaded&&g.loaded.stuff&&(P=k(k({},P),g.loaded.stuff)),R.push(g)}return await this._get_navigation_result_from_branch({page:b,branch:R})}async _load_error({status:t,error:e,path:s,query:i}){const n={host:this.host,path:s,query:i,params:{}},a=await this._load_node({module:await this.fallback[0],page:n,stuff:{}}),o=[a,await this._load_node({status:t,error:e,module:await this.fallback[1],page:n,stuff:a&&a.loaded&&a.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:n,branch:o})}}async function Yt({paths:r,target:t,session:e,host:s,route:i,spa:n,trailing_slash:a,hydrate:o}){const l=new Dt({Root:Lt,fallback:At,target:t,session:e,host:s}),c=i?new Pt({base:r.base,routes:Ot,trailing_slash:a,renderer:l}):null;Tt(r),o&&await l.start(o),c&&(n&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Yt as start};
