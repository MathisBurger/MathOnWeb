function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function R(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function D(){return Object.create(null)}function b(t){t.forEach(B)}function H(t){return typeof t=="function"}function ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function _t(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function dt(t,e,n){t.$$.on_destroy.push(G(e,n))}function ht(t,e,n,r){if(t){const c=L(t,e,n,r);return t[0](c)}}function L(t,e,n,r){return t[1]&&r?F(n.ctx.slice(),t[1](r(e))):n.ctx}function mt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],u=Math.max(e.dirty.length,c.length);for(let o=0;o<u;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function pt(t,e,n,r,c,l){if(c){const u=L(e,n,r,l);t.p(u,c)}}function yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function bt(t){return t==null?"":t}let k=!1;function I(){k=!0}function J(){k=!1}function K(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=s?c+1:K(1,c,d=>e[n[d]].claim_order,s))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const l=[],u=[];let o=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(l.push(e[i-1]);o>=i;o--)u.push(e[o]);o--}for(;o>=0;o--)u.push(e[o]);l.reverse(),u.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<u.length;i++){for(;s<l.length&&u[i].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(u[i],f)}}function U(t,e){if(k){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){k&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function $t(){return S(" ")}function wt(){return S("")}function kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return t===""?null:+t}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,c=!1){tt(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(e(o)){const i=n(o);return i===void 0?t.splice(u,1):t[u]=i,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(e(o)){const i=n(o);return i===void 0?t.splice(u,1):t[u]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,e,n,r){return O(t,c=>c.nodeName===e,c=>{const l=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];n[o.name]||l.push(o.name)}l.forEach(u=>c.removeAttribute(u))},()=>r(e))}function Nt(t,e,n){return P(t,e,n,X)}function At(t,e,n){return P(t,e,n,Y)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>S(e),!0)}function jt(t){return et(t," ")}function St(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ct(t,e){t.value=e==null?"":e}function Tt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Mt(t,e){const n=[];let r=0;for(const c of e.childNodes)if(c.nodeType===8){const l=c.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(c)):l===`HEAD_${t}_START`&&(r+=1,n.push(c))}else r>0&&n.push(c);return n}function Dt(t,e){return new t(e)}let y;function _(t){y=t}function E(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){E().$$.on_mount.push(t)}function Bt(t){E().$$.after_update.push(t)}function Ht(t,e){return E().$$.context.set(t,e),e}const p=[],q=[],x=[],N=[],nt=Promise.resolve();let A=!1;function rt(){A||(A=!0,nt.then(C))}function j(t){x.push(t)}function Lt(t){N.push(t)}const v=new Set;let m=0;function C(){if(m!==0)return;const t=y;do{try{for(;m<p.length;){const e=p[m];m++,_(e),ct(e.$$)}}catch(e){throw p.length=0,m=0,e}for(_(null),p.length=0,m=0;q.length;)q.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];v.has(n)||(v.add(n),n())}x.length=0}while(p.length);for(;N.length;)N.pop()();A=!1,v.clear(),_(t)}function ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const $=new Set;let h;function it(){h={r:0,c:[],p:h}}function ut(){h.r||b(h.c),h=h.p}function z(t,e){t&&t.i&&($.delete(t),t.i(e))}function lt(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),h.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Ot(t,e){const n=e.token={};function r(c,l,u,o){if(e.token!==n)return;e.resolved=o;let i=e.ctx;u!==void 0&&(i=i.slice(),i[u]=o);const s=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==l&&a&&(it(),lt(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),ut())}):e.block.d(1),s.c(),z(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[l]=s),f&&C()}if(R(t)){const c=E();if(t.then(l=>{_(c),r(e.then,1,e.value,l),_(null)},l=>{if(_(c),r(e.catch,2,e.error,l),_(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Pt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function zt(t,e){const n={},r={},c={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=e[l];if(o){for(const i in u)i in o||(r[i]=1);for(const i in o)c[i]||(n[i]=o[i],c[i]=1);t[l]=o}else for(const i in u)c[i]=1}for(const u in r)u in n||(n[u]=void 0);return n}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Wt(t){t&&t.c()}function Gt(t,e){t&&t.l(e)}function st(t,e,n,r){const{fragment:c,after_update:l}=t.$$;c&&c.m(e,n),r||j(()=>{const u=t.$$.on_mount.map(B).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...u):b(u),t.$$.on_mount=[]}),l.forEach(j)}function ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(p.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,r,c,l,u,o=[-1]){const i=y;_(t);const s=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:c,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:e.target||i.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,d,...T)=>{const M=T.length?T[0]:d;return s.ctx&&c(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&at(t,a)),d}):[],s.update(),f=!0,b(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){I();const a=Z(e.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();e.intro&&z(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),J(),C()}_(i)}class Jt{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!H(n))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_t as $,Bt as A,qt as B,F as C,w as D,G as E,b as F,H as G,Y as H,At as I,bt as J,U as K,kt as L,dt as M,Ot as N,Mt as O,Pt as P,ht as Q,pt as R,Jt as S,yt as T,mt as U,xt as V,Ct as W,q as X,Rt as Y,Lt as Z,vt as _,Nt as a,Tt as a0,Z as b,Dt as c,V as d,X as e,Et as f,gt as g,et as h,It as i,St as j,Wt as k,$t as l,wt as m,Gt as n,jt as o,st as p,zt as q,Ft as r,ft as s,S as t,it as u,lt as v,ot as w,ut as x,z as y,Ht as z};
