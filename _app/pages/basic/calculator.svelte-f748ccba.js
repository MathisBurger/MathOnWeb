import{S as SvelteComponent,i as init,s as safe_not_equal,e as element,k as space,t as text,c as claim_element,a as children,n as claim_space,g as claim_text,d as detach,b as attr,f as insert_hydration,J as append_hydration,V as set_input_value,K as listen,C as noop,E as run_all,L as component_subscribe}from"../../chunks/index-7d9d2a1b.js";import{X}from"../../chunks/runtime.esm-12a20045.js";import"../../chunks/index-e5ad1a6c.js";var calculator_svelte_svelte_type_style_lang="";function create_fragment(t){let r,e,d,K,a,v,R,q,b,A,J,f,P,j,D,z,n,y,F,G,k,H,M,T,Q,W,w,Y,Z,l,$,tt,et,E,at,nt,x,lt,it,S,ct,st,i,g,rt,dt,N,ot,_t,B,pt,ht,U,ut,mt,c,O,vt,bt,L,ft,yt,C,kt,Tt,I,wt,$t,Et;return{c(){r=element("div"),e=element("div"),d=element("input"),K=space(),a=element("div"),v=element("button"),R=text("C"),q=space(),b=element("button"),A=text("ANS"),J=space(),f=element("button"),P=text("BCK"),j=space(),D=element("button"),z=space(),n=element("div"),y=element("button"),F=text("7"),G=space(),k=element("button"),H=text("8"),M=space(),T=element("button"),Q=text("9"),W=space(),w=element("button"),Y=text("/"),Z=space(),l=element("div"),$=element("button"),tt=text("4"),et=space(),E=element("button"),at=text("5"),nt=space(),x=element("button"),lt=text("6"),it=space(),S=element("button"),ct=text("*"),st=space(),i=element("div"),g=element("button"),rt=text("1"),dt=space(),N=element("button"),ot=text("2"),_t=space(),B=element("button"),pt=text("3"),ht=space(),U=element("button"),ut=text("-"),mt=space(),c=element("div"),O=element("button"),vt=text("0"),bt=space(),L=element("button"),ft=text("."),yt=space(),C=element("button"),kt=text("="),Tt=space(),I=element("button"),wt=text("+"),this.h()},l(o){r=claim_element(o,"DIV",{class:!0});var V=children(r);e=claim_element(V,"DIV",{class:!0});var s=children(e);d=claim_element(s,"INPUT",{class:!0}),K=claim_space(s),a=claim_element(s,"DIV",{class:!0});var _=children(a);v=claim_element(_,"BUTTON",{class:!0});var xt=children(v);R=claim_text(xt,"C"),xt.forEach(detach),q=claim_space(_),b=claim_element(_,"BUTTON",{class:!0});var St=children(b);A=claim_text(St,"ANS"),St.forEach(detach),J=claim_space(_),f=claim_element(_,"BUTTON",{class:!0});var gt=children(f);P=claim_text(gt,"BCK"),gt.forEach(detach),j=claim_space(_),D=claim_element(_,"BUTTON",{class:!0}),children(D).forEach(detach),_.forEach(detach),z=claim_space(s),n=claim_element(s,"DIV",{class:!0});var p=children(n);y=claim_element(p,"BUTTON",{class:!0});var Nt=children(y);F=claim_text(Nt,"7"),Nt.forEach(detach),G=claim_space(p),k=claim_element(p,"BUTTON",{class:!0});var Bt=children(k);H=claim_text(Bt,"8"),Bt.forEach(detach),M=claim_space(p),T=claim_element(p,"BUTTON",{class:!0});var Ut=children(T);Q=claim_text(Ut,"9"),Ut.forEach(detach),W=claim_space(p),w=claim_element(p,"BUTTON",{class:!0});var Ot=children(w);Y=claim_text(Ot,"/"),Ot.forEach(detach),p.forEach(detach),Z=claim_space(s),l=claim_element(s,"DIV",{class:!0});var h=children(l);$=claim_element(h,"BUTTON",{class:!0});var Lt=children($);tt=claim_text(Lt,"4"),Lt.forEach(detach),et=claim_space(h),E=claim_element(h,"BUTTON",{class:!0});var Ct=children(E);at=claim_text(Ct,"5"),Ct.forEach(detach),nt=claim_space(h),x=claim_element(h,"BUTTON",{class:!0});var It=children(x);lt=claim_text(It,"6"),It.forEach(detach),it=claim_space(h),S=claim_element(h,"BUTTON",{class:!0});var Vt=children(S);ct=claim_text(Vt,"*"),Vt.forEach(detach),h.forEach(detach),st=claim_space(s),i=claim_element(s,"DIV",{class:!0});var u=children(i);g=claim_element(u,"BUTTON",{class:!0});var Dt=children(g);rt=claim_text(Dt,"1"),Dt.forEach(detach),dt=claim_space(u),N=claim_element(u,"BUTTON",{class:!0});var Kt=children(N);ot=claim_text(Kt,"2"),Kt.forEach(detach),_t=claim_space(u),B=claim_element(u,"BUTTON",{class:!0});var Rt=children(B);pt=claim_text(Rt,"3"),Rt.forEach(detach),ht=claim_space(u),U=claim_element(u,"BUTTON",{class:!0});var qt=children(U);ut=claim_text(qt,"-"),qt.forEach(detach),u.forEach(detach),mt=claim_space(s),c=claim_element(s,"DIV",{class:!0});var m=children(c);O=claim_element(m,"BUTTON",{class:!0});var At=children(O);vt=claim_text(At,"0"),At.forEach(detach),bt=claim_space(m),L=claim_element(m,"BUTTON",{class:!0});var Xt=children(L);ft=claim_text(Xt,"."),Xt.forEach(detach),yt=claim_space(m),C=claim_element(m,"BUTTON",{class:!0});var Jt=children(C);kt=claim_text(Jt,"="),Jt.forEach(detach),Tt=claim_space(m),I=claim_element(m,"BUTTON",{class:!0});var Pt=children(I);wt=claim_text(Pt,"+"),Pt.forEach(detach),m.forEach(detach),s.forEach(detach),V.forEach(detach),this.h()},h(){attr(d,"class","data-display svelte-1sfw36i"),attr(v,"class","extra-button svelte-1sfw36i"),attr(b,"class","extra-button svelte-1sfw36i"),attr(f,"class","extra-button svelte-1sfw36i"),attr(D,"class","extra-button svelte-1sfw36i"),attr(a,"class","button-row svelte-1sfw36i"),attr(y,"class","normal-button svelte-1sfw36i"),attr(k,"class","normal-button svelte-1sfw36i"),attr(T,"class","normal-button svelte-1sfw36i"),attr(w,"class","action-button svelte-1sfw36i"),attr(n,"class","button-row svelte-1sfw36i"),attr($,"class","normal-button svelte-1sfw36i"),attr(E,"class","normal-button svelte-1sfw36i"),attr(x,"class","normal-button svelte-1sfw36i"),attr(S,"class","action-button svelte-1sfw36i"),attr(l,"class","button-row svelte-1sfw36i"),attr(g,"class","normal-button svelte-1sfw36i"),attr(N,"class","normal-button svelte-1sfw36i"),attr(B,"class","normal-button svelte-1sfw36i"),attr(U,"class","action-button svelte-1sfw36i"),attr(i,"class","button-row svelte-1sfw36i"),attr(O,"class","normal-button svelte-1sfw36i"),attr(L,"class","normal-button svelte-1sfw36i"),attr(C,"class","normal-button svelte-1sfw36i"),attr(I,"class","action-button svelte-1sfw36i"),attr(c,"class","button-row svelte-1sfw36i"),attr(e,"class","container svelte-1sfw36i"),attr(r,"class","centered svelte-1sfw36i")},m(o,V){insert_hydration(o,r,V),append_hydration(r,e),append_hydration(e,d),set_input_value(d,t[0]),append_hydration(e,K),append_hydration(e,a),append_hydration(a,v),append_hydration(v,R),append_hydration(a,q),append_hydration(a,b),append_hydration(b,A),append_hydration(a,J),append_hydration(a,f),append_hydration(f,P),append_hydration(a,j),append_hydration(a,D),append_hydration(e,z),append_hydration(e,n),append_hydration(n,y),append_hydration(y,F),append_hydration(n,G),append_hydration(n,k),append_hydration(k,H),append_hydration(n,M),append_hydration(n,T),append_hydration(T,Q),append_hydration(n,W),append_hydration(n,w),append_hydration(w,Y),append_hydration(e,Z),append_hydration(e,l),append_hydration(l,$),append_hydration($,tt),append_hydration(l,et),append_hydration(l,E),append_hydration(E,at),append_hydration(l,nt),append_hydration(l,x),append_hydration(x,lt),append_hydration(l,it),append_hydration(l,S),append_hydration(S,ct),append_hydration(e,st),append_hydration(e,i),append_hydration(i,g),append_hydration(g,rt),append_hydration(i,dt),append_hydration(i,N),append_hydration(N,ot),append_hydration(i,_t),append_hydration(i,B),append_hydration(B,pt),append_hydration(i,ht),append_hydration(i,U),append_hydration(U,ut),append_hydration(e,mt),append_hydration(e,c),append_hydration(c,O),append_hydration(O,vt),append_hydration(c,bt),append_hydration(c,L),append_hydration(L,ft),append_hydration(c,yt),append_hydration(c,C),append_hydration(C,kt),append_hydration(c,Tt),append_hydration(c,I),append_hydration(I,wt),$t||(Et=[listen(d,"input",t[7]),listen(d,"keydown",t[8]),listen(v,"click",t[9]),listen(b,"click",t[10]),listen(f,"click",t[11]),listen(y,"click",t[12]),listen(k,"click",t[13]),listen(T,"click",t[14]),listen(w,"click",t[15]),listen($,"click",t[16]),listen(E,"click",t[17]),listen(x,"click",t[18]),listen(S,"click",t[19]),listen(g,"click",t[20]),listen(N,"click",t[21]),listen(B,"click",t[22]),listen(U,"click",t[23]),listen(O,"click",t[24]),listen(L,"click",t[25]),listen(C,"click",t[26]),listen(I,"click",t[27])],$t=!0)},p(o,[V]){V&1&&d.value!==o[0]&&set_input_value(d,o[0])},i:noop,o:noop,d(o){o&&detach(r),$t=!1,run_all(Et)}}}function instance($$self,$$props,$$invalidate){let $_;component_subscribe($$self,X,t=>$$invalidate(29,$_=t));let inputString="0",lastResult="0";function addLetter(t){inputString==="0"?$$invalidate(0,inputString=t):$$invalidate(0,inputString+=t)}function solve(){try{$$invalidate(0,inputString=eval(inputString)),lastResult=inputString}catch(t){$$invalidate(0,inputString=$_("general.error"))}}function clear(){$$invalidate(0,inputString="0")}function ans(){inputString==="0"?$$invalidate(0,inputString=lastResult):$$invalidate(0,inputString+=lastResult)}function KeydownEnter(t){t.key==="Enter"&&solve()}function back(){let t=inputString.slice(0,-1);t===""?$$invalidate(0,inputString="0"):$$invalidate(0,inputString=t)}function input_input_handler(){inputString=this.value,$$invalidate(0,inputString)}const keydown_handler=t=>KeydownEnter(t),click_handler=()=>clear(),click_handler_1=()=>ans(),click_handler_2=()=>back(),click_handler_3=()=>addLetter("7"),click_handler_4=()=>addLetter("8"),click_handler_5=()=>addLetter("9"),click_handler_6=()=>addLetter("/"),click_handler_7=()=>addLetter("4"),click_handler_8=()=>addLetter("5"),click_handler_9=()=>addLetter("6"),click_handler_10=()=>addLetter("*"),click_handler_11=()=>addLetter("1"),click_handler_12=()=>addLetter("2"),click_handler_13=()=>addLetter("3"),click_handler_14=()=>addLetter("-"),click_handler_15=()=>addLetter("0"),click_handler_16=()=>addLetter("."),click_handler_17=()=>solve(),click_handler_18=()=>addLetter("+");return[inputString,addLetter,solve,clear,ans,KeydownEnter,back,input_input_handler,keydown_handler,click_handler,click_handler_1,click_handler_2,click_handler_3,click_handler_4,click_handler_5,click_handler_6,click_handler_7,click_handler_8,click_handler_9,click_handler_10,click_handler_11,click_handler_12,click_handler_13,click_handler_14,click_handler_15,click_handler_16,click_handler_17,click_handler_18]}class Calculator extends SvelteComponent{constructor(r){super(),init(this,r,instance,create_fragment,safe_not_equal,{})}}export{Calculator as default};
