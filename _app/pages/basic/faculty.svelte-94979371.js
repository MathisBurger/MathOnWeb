import{S as b,i as D,s as E,e as _,k as C,t as S,c as v,a as m,n as k,g as q,d as f,b as u,f as F,J as c,V as x,K as J,Z as $,h as K,C as I}from"../../chunks/index-7d9d2a1b.js";import{f as V}from"../../chunks/custom-math-d14d206d.js";function N(i){let t,s,e,r,n,o=V(i[0])+"",d,h,y;return{c(){t=_("div"),s=_("div"),e=_("input"),r=C(),n=_("div"),d=S(o),this.h()},l(a){t=v(a,"DIV",{class:!0});var l=m(t);s=v(l,"DIV",{class:!0});var p=m(s);e=v(p,"INPUT",{class:!0,type:!0}),r=k(p),n=v(p,"DIV",{class:!0});var g=m(n);d=q(g,o),g.forEach(f),p.forEach(f),l.forEach(f),this.h()},h(){u(e,"class","larger-input svelte-8xo9te"),u(e,"type","number"),u(n,"class","result-form svelte-8xo9te"),u(s,"class","container svelte-8xo9te"),u(t,"class","centered svelte-8xo9te")},m(a,l){F(a,t,l),c(t,s),c(s,e),x(e,i[0]),c(s,r),c(s,n),c(n,d),h||(y=J(e,"input",i[1]),h=!0)},p(a,[l]){l&1&&$(e.value)!==a[0]&&x(e,a[0]),l&1&&o!==(o=V(a[0])+"")&&K(d,o)},i:I,o:I,d(a){a&&f(t),h=!1,y()}}}function P(i,t,s){let e=0;function r(){e=$(this.value),s(0,e)}return[e,r]}class Z extends b{constructor(t){super(),D(this,t,P,N,E,{})}}export{Z as default};
