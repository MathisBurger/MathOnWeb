function A(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function H(t){return t&&typeof t=="object"&&typeof t.then=="function"}function B(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(B)}function I(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(W(e,n))}function dt(t,e,n,r){if(t){const c=L(t,e,n,r);return t[0](c)}}function L(t,e,n,r){return t[1]&&r?F(n.ctx.slice(),t[1](r(e))):n.ctx}function _t(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],u=Math.max(e.dirty.length,c.length);for(let l=0;l<u;l+=1)o[l]=e.dirty[l]|c[l];return o}return e.dirty|c}return e.dirty}function ht(t,e,n,r,c,o){if(c){const u=L(e,n,r,o);t.p(u,c)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function pt(t){return t==null?"":t}let x=!1;function G(){x=!0}function J(){x=!1}function K(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=s?c+1:K(1,c,d=>e[n[d]].claim_order,s))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const o=[],u=[];let l=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(o.push(e[i-1]);l>=i;l--)u.push(e[l]);l--}for(;l>=0;l--)u.push(e[l]);o.reverse(),u.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<u.length;i++){for(;s<o.length&&u[i].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(u[i],f)}}function R(t,e){if(x){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){x&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function gt(){return N(" ")}function xt(){return N("")}function $t(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return t===""?null:+t}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,r,c=!1){Z(t);const o=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const l=t[u];if(e(l)){const i=n(l);return i===void 0?t.splice(u,1):t[u]=i,c||(t.claim_info.last_index=u),l}}for(let u=t.claim_info.last_index-1;u>=0;u--){const l=t[u];if(e(l)){const i=n(l);return i===void 0?t.splice(u,1):t[u]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function z(t,e,n,r){return O(t,c=>c.nodeName===e,c=>{const o=[];for(let u=0;u<c.attributes.length;u++){const l=c.attributes[u];n[l.name]||o.push(l.name)}o.forEach(u=>c.removeAttribute(u))},()=>r(e))}function Et(t,e,n){return z(t,e,n,V)}function vt(t,e,n){return z(t,e,n,X)}function tt(t,e){return O(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>N(e),!0)}function jt(t){return tt(t," ")}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e==null?"":e}function St(t,e=document.body){return Array.from(e.querySelectorAll(t))}let g;function _(t){g=t}function $(){if(!g)throw new Error("Function called outside component initialization");return g}function Ct(t){$().$$.on_mount.push(t)}function Mt(t){$().$$.after_update.push(t)}function Tt(t,e){$().$$.context.set(t,e)}const m=[],q=[],y=[],E=[],et=Promise.resolve();let v=!1;function nt(){v||(v=!0,et.then(S))}function j(t){y.push(t)}function qt(t){E.push(t)}let k=!1;const w=new Set;function S(){if(!k){k=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];_(e),rt(e.$$)}for(_(null),m.length=0;q.length;)q.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];w.has(e)||(w.add(e),e())}y.length=0}while(m.length);for(;E.length;)E.pop()();v=!1,k=!1,w.clear()}}function rt(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const b=new Set;let h;function ct(){h={r:0,c:[],p:h}}function it(){h.r||p(h.c),h=h.p}function D(t,e){t&&t.i&&(b.delete(t),t.i(e))}function ut(t,e,n,r){if(t&&t.o){if(b.has(t))return;b.add(t),h.c.push(()=>{b.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Bt(t,e){const n=e.token={};function r(c,o,u,l){if(e.token!==n)return;e.resolved=l;let i=e.ctx;u!==void 0&&(i=i.slice(),i[u]=l);const s=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(ct(),ut(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),it())}):e.block.d(1),s.c(),D(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[o]=s),f&&S()}if(H(t)){const c=$();if(t.then(o=>{_(c),r(e.then,1,e.value,o),_(null)},o=>{if(_(c),r(e.catch,2,e.error,o),_(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Lt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}function Ot(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const u=t[o],l=e[o];if(l){for(const i in u)i in l||(r[i]=1);for(const i in l)c[i]||(n[i]=l[i],c[i]=1);t[o]=l}else for(const i in u)c[i]=1}for(const u in r)u in n||(n[u]=void 0);return n}function zt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Ft(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function lt(t,e,n,r){const{fragment:c,on_mount:o,on_destroy:u,after_update:l}=t.$$;c&&c.m(e,n),r||j(()=>{const i=o.map(B).filter(I);u?u.push(...i):p(i),t.$$.on_mount=[]}),l.forEach(j)}function st(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(m.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,r,c,o,u,l=[-1]){const i=g;_(t);const s=t.$$={fragment:null,ctx:null,props:o,update:A,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:T(),dirty:l,skip_bound:!1,root:e.target||i.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,d,...C)=>{const M=C.length?C[0]:d;return s.ctx&&c(s.ctx[a],s.ctx[a]=M)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](M),f&&ot(t,a)),d}):[],s.update(),f=!0,p(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){G();const a=Y(e.target);s.fragment&&s.fragment.l(a),a.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&D(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),J(),S()}_(i)}class Pt{$destroy(){st(this,1),this.$destroy=A}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ct as A,F as B,A as C,W as D,p as E,I as F,X as G,vt as H,pt as I,R as J,$t as K,ft as L,Bt as M,St as N,Lt as O,dt as P,ht as Q,mt as R,Pt as S,_t as T,bt as U,Nt as V,q as W,Dt as X,qt as Y,wt as Z,Y as a,kt as b,Et as c,U as d,V as e,yt as f,tt as g,At as h,It as i,Ft as j,gt as k,xt as l,Ht as m,jt as n,lt as o,Ot as p,zt as q,ct as r,at as s,N as t,ut as u,st as v,it as w,D as x,Tt as y,Mt as z};
