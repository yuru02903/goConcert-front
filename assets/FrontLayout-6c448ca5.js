import{p as Y,m as ne,g as H,u as W,c as a,a as G,V as k,k as ae,b as se,d as le,e as xe,f as Ve,h as Ce,i as _e,j as ke,r as P,l as y,s as F,w as we,n as Se,o as ie,q as Te,t as Be,v as $e,x as Ie,y as Pe,z as Ee,A as Le,M as Re,B as O,C as Ae,D as Xe,E as Ye,F as R,G as He,H as We,I as Me,J as je,K as De,L as Ge,N as pe,O as E,P as ze,Q as Ne,R as Fe,S as Oe,T as Ue,U as qe,W as Je,X as V,Y as I,Z as i,_ as q,$ as A,a0 as J,a1 as S,a2 as Ke,a3 as K,a4 as j,a5 as p,a6 as X,a7 as Q,a8 as Qe,a9 as ue,aa as Z,ab as Ze}from"./index-c58a86af.js";import et from"./LoginView-a39e2d7a.js";import tt from"./RegisterView-ad2928c1.js";import{u as ot,V as nt,a as z,b as N}from"./VList-7fc3710a.js";import{V as at}from"./VNavigationDrawer-278d160d.js";import{V as ee,a as D}from"./VRow-965a2736.js";import{m as st,V as te}from"./VSlideGroup-bdc5eb0c.js";import{V as lt}from"./VDivider-841cc530.js";import"./index-dc526c7b.js";import"./vee-validate.esm-4345f00f.js";import"./index.esm-ad1d64b1.js";import"./VContainer-fc32891e.js";const it=Y({...ne({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ut=H()({name:"VAppBarNavIcon",props:it(),setup(e,t){let{slots:o}=t;return W(()=>a(k,G(e,{class:["v-app-bar-nav-icon"]}),o)),{}}});const rt=e=>{const{touchstartX:t,touchendX:o,touchstartY:n,touchendY:r}=e,f=.5,s=16;e.offsetX=o-t,e.offsetY=r-n,Math.abs(e.offsetY)<f*Math.abs(e.offsetX)&&(e.left&&o<t-s&&e.left(e),e.right&&o>t+s&&e.right(e)),Math.abs(e.offsetX)<f*Math.abs(e.offsetY)&&(e.up&&r<n-s&&e.up(e),e.down&&r>n+s&&e.down(e))};function ct(e,t){var n;const o=e.changedTouches[0];t.touchstartX=o.clientX,t.touchstartY=o.clientY,(n=t.start)==null||n.call(t,{originalEvent:e,...t})}function dt(e,t){var n;const o=e.changedTouches[0];t.touchendX=o.clientX,t.touchendY=o.clientY,(n=t.end)==null||n.call(t,{originalEvent:e,...t}),rt(t)}function vt(e,t){var n;const o=e.changedTouches[0];t.touchmoveX=o.clientX,t.touchmoveY=o.clientY,(n=t.move)==null||n.call(t,{originalEvent:e,...t})}function ft(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>ct(o,t),touchend:o=>dt(o,t),touchmove:o=>vt(o,t)}}function mt(e,t){var m;const o=t.value,n=o!=null&&o.parent?e.parentElement:e,r=(o==null?void 0:o.options)??{passive:!0},f=(m=t.instance)==null?void 0:m.$.uid;if(!n||!f)return;const s=ft(t.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[f]=s,ae(s).forEach(c=>{n.addEventListener(c,s[c],r)})}function ht(e,t){var f,s;const o=(f=t.value)!=null&&f.parent?e.parentElement:e,n=(s=t.instance)==null?void 0:s.$.uid;if(!(o!=null&&o._touchHandlers)||!n)return;const r=o._touchHandlers[n];ae(r).forEach(m=>{o.removeEventListener(m,r[m])}),delete o._touchHandlers[n]}const re={mounted:mt,unmounted:ht},gt=re,ce=Symbol.for("vuetify:v-window"),de=Symbol.for("vuetify:v-window-group"),yt=Y({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...se(),...le(),...xe()},"VWindow"),bt=H()({name:"VWindow",directives:{Touch:re},props:yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{themeClasses:n}=Ve(e),{isRtl:r}=Ce(),{t:f}=_e(),s=ke(e,de),m=P(),c=y(()=>r.value?!e.reverse:e.reverse),d=F(!1),w=y(()=>{const v=e.direction==="vertical"?"y":"x",_=(c.value?!d.value:d.value)?"-reverse":"";return`v-window-${v}${_}-transition`}),b=F(0),g=P(void 0),x=y(()=>s.items.value.findIndex(v=>s.selected.value.includes(v.id)));we(x,(v,h)=>{const _=s.items.value.length,T=_-1;_<=2?d.value=v<h:v===T&&h===0?d.value=!0:v===0&&h===T?d.value=!1:d.value=v<h}),Se(ce,{transition:w,isReversed:d,transitionCount:b,transitionHeight:g,rootRef:m});const l=y(()=>e.continuous||x.value!==0),C=y(()=>e.continuous||x.value!==s.items.value.length-1);function u(){l.value&&s.prev()}function M(){C.value&&s.next()}const B=y(()=>{const v=[],h={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:s.prev,"aria-label":f("$vuetify.carousel.prev")};v.push(l.value?o.prev?o.prev({props:h}):a(k,h,null):a("div",null,null));const _={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:s.next,"aria-label":f("$vuetify.carousel.next")};return v.push(C.value?o.next?o.next({props:_}):a(k,_,null):a("div",null,null)),v}),$=y(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?u():M()},right:()=>{c.value?M():u()},start:h=>{let{originalEvent:_}=h;_.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>ie(a(e.tag,{ref:m,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var v,h;return[a("div",{class:"v-window__container",style:{height:g.value}},[(v=o.default)==null?void 0:v.call(o,{group:s}),e.showArrows!==!1&&a("div",{class:"v-window__controls"},[B.value])]),(h=o.additional)==null?void 0:h.call(o,{group:s})]}}),[[Te("touch"),$.value]])),{group:s}}}),xt=Y({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...se(),...Be(),...$e()},"VWindowItem"),oe=H()({name:"VWindowItem",directives:{Touch:gt},props:xt(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:o}=t;const n=Ie(ce),r=Pe(e,de),{isBooted:f}=ot();if(!n||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=F(!1),m=y(()=>f.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var l;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=O((l=n.rootRef.value)==null?void 0:l.clientHeight)),n.transitionCount.value+=1)}function w(){c()}function b(l){s.value&&Ae(()=>{!m.value||!s.value||!n||(n.transitionHeight.value=O(l.clientHeight))})}const g=y(()=>{const l=n.isReversed.value?e.reverseTransition:e.transition;return m.value?{name:typeof l!="string"?n.transition.value:l,onBeforeEnter:d,onAfterEnter:c,onEnterCancelled:w,onBeforeLeave:d,onAfterLeave:c,onLeaveCancelled:w,onEnter:b}:!1}),{hasContent:x}=Ee(e,r.isSelected);return W(()=>a(Re,{transition:g.value,disabled:!f.value},{default:()=>{var l;return[ie(a("div",{class:["v-window-item",r.selectedClass.value,e.class],style:e.style},[x.value&&((l=o.default)==null?void 0:l.call(o))]),[[Le,r.isSelected.value]])]}})),{groupItem:r}}});const ve=Symbol.for("vuetify:v-tabs"),Vt=Y({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Xe(ne({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),fe=H()({name:"VTab",props:Vt(),setup(e,t){let{slots:o,attrs:n}=t;const{textColorClasses:r,textColorStyles:f}=Ye(e,"sliderColor"),s=P(),m=P(),c=y(()=>e.direction==="horizontal"),d=y(()=>{var b,g;return((g=(b=s.value)==null?void 0:b.group)==null?void 0:g.isSelected.value)??!1});function w(b){var x,l;let{value:g}=b;if(g){const C=(l=(x=s.value)==null?void 0:x.$el.parentElement)==null?void 0:l.querySelector(".v-tab--selected .v-tab__slider"),u=m.value;if(!C||!u)return;const M=getComputedStyle(C).color,B=C.getBoundingClientRect(),$=u.getBoundingClientRect(),v=c.value?"x":"y",h=c.value?"X":"Y",_=c.value?"right":"bottom",T=c.value?"width":"height",me=B[v],he=$[v],L=me>he?B[_]-$[_]:B[v]-$[v],ge=Math.sign(L)>0?c.value?"right":"bottom":Math.sign(L)<0?c.value?"left":"top":"center",ye=(Math.abs(L)+(Math.sign(L)<0?B[T]:$[T]))/Math.max(B[T],$[T])||0,be=B[T]/$[T]||0,U=1.5;We(u,{backgroundColor:[M,"currentcolor"],transform:[`translate${h}(${L}px) scale${h}(${be})`,`translate${h}(${L/U}px) scale${h}(${(ye-1)/U+1})`,"none"],transformOrigin:Array(3).fill(ge)},{duration:225,easing:Me})}}return W(()=>{const b=k.filterProps(e);return a(k,G({symbol:ve,ref:s,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},b,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":w}),{...o,default:()=>{var g;return a(R,null,[((g=o.default)==null?void 0:g.call(o))??e.text,!e.hideSlider&&a("div",{ref:m,class:["v-tab__slider",r.value],style:f.value},null)])}})}),He({},s)}});function Ct(e){return e?e.map(t=>Ne(t)?t:{text:t,value:t}):[]}const _t=Y({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...st({mandatory:"force"}),...je(),...le()},"VTabs"),kt=H()({name:"VTabs",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const n=De(e,"modelValue"),r=y(()=>Ct(e.items)),{densityClasses:f}=Ge(e),{backgroundColorClasses:s,backgroundColorStyles:m}=pe(E(e,"bgColor"));return ze({VTab:{color:E(e,"color"),direction:E(e,"direction"),stacked:E(e,"stacked"),fixed:E(e,"fixedTabs"),sliderColor:E(e,"sliderColor"),hideSlider:E(e,"hideSlider")}}),W(()=>{const c=te.filterProps(e);return a(te,G(c,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},f.value,s.value,e.class],style:[{"--v-tabs-height":O(e.height)},m.value,e.style],role:"tablist",symbol:ve}),{default:()=>[o.default?o.default():r.value.map(d=>a(fe,G(d,{key:d.text}),null))]})}),{}}});const wt=ue("h2",null,"尚未註冊?",-1),St=ue("h2",null,"已經註冊?",-1),Mt={__name:"FrontLayout",setup(e){const t=Fe(),{apiAuth:o}=Ze(),n=Oe(),r=Ue(),{smAndDown:f}=qe(),s=y(()=>f.value),m=P(!1),c=y(()=>[{to:"/",text:"首頁",icon:"mdi-music",show:!0},{to:"/tickets",text:"票券交流",icon:"mdi-ticket-confirmation",show:!0},{to:"/seats",text:"座位視野",icon:"mdi-sofa-single",show:!0},{to:"/member",text:"會員專區",icon:"mdi-cog",show:t.isLogin&&!t.isAdmin},{to:"/admin",text:"管理專區",icon:"mdi-cog",show:t.isLogin&&t.isAdmin}]),d=P(!1),w=P(!1),b=async()=>{var x,l;try{await o.delete("/users/logout"),t.logout(),r({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"top"}}),n.push("/")}catch(C){const u=((l=(x=C==null?void 0:C.response)==null?void 0:x.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";r({text:u,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"top"}})}},g=P(1);return(x,l)=>{const C=Je("RouterView");return V(),I(q,{color:"mainColor",style:{height:"100%"},class:"pb-8"},{default:i(()=>[s.value?(V(),A(R,{key:0},[a(K,{class:"text-center justify-center align-center py-3 bb d-flex"},{default:i(()=>[a(J,null,{default:i(()=>[a(k,{class:"font-weight-bold text-h3 text-mainColor",height:"100%",to:"/",active:!1},{default:i(()=>[S("GoConcert")]),_:1})]),_:1}),a(Ke),a(ut,{onClick:l[0]||(l[0]=u=>m.value=!0)})]),_:1}),a(at,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=u=>m.value=u),location:"right"},{default:i(()=>[a(nt,null,{default:i(()=>[j(t).isLogin?X("",!0):(V(),I(z,{key:0,to:"/login"},{prepend:i(()=>[a(p,{icon:"mdi-login"})]),default:i(()=>[a(N,null,{default:i(()=>[S(" 登入/註冊 ")]),_:1})]),_:1})),j(t).isLogin?(V(),I(z,{key:1,onClick:b},{prepend:i(()=>[a(p,{icon:"mdi-logout"})]),default:i(()=>[a(N,null,{default:i(()=>[S(" 登出 ")]),_:1})]),_:1})):X("",!0),(V(!0),A(R,null,Q(c.value,u=>(V(),I(z,{key:u.to,to:u.to},{prepend:i(()=>[a(p,{icon:u.icon},null,8,["icon"])]),default:i(()=>[a(N,null,{default:i(()=>[S(Z(u.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])],64)):(V(),A(R,{key:1},[a(K,{class:"text-center justify-center py-3 bb d-flex"},{default:i(()=>[a(J,null,{default:i(()=>[a(k,{class:"font-weight-bold text-h3 text-mainColor",height:"100%",to:"/",active:!1},{default:i(()=>[S("GoConcert")]),_:1})]),_:1})]),_:1}),a(kt,{modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=u=>d.value=u),"bg-color":"transparent",color:"mainColor",grow:"",active:!1},{default:i(()=>[(V(!0),A(R,null,Q(c.value,u=>(V(),A(R,{key:u.to},[u.show?(V(),I(fe,{key:0,to:u.to,"prepend-icon":u.icon,active:!1},{default:i(()=>[S(Z(u.text),1)]),_:2},1032,["to","prepend-icon"])):X("",!0)],64))),128)),j(t).isLogin?X("",!0):(V(),I(k,{key:0,width:"16%",height:"100%",variant:"text","prepend-icon":"mdi-login",onClick:l[6]||(l[6]=u=>w.value=!0)},{default:i(()=>[S(" 登入/註冊 "),a(Qe,{modelValue:w.value,"onUpdate:modelValue":l[5]||(l[5]=u=>w.value=u),scrollable:"",width:"40%","min-width":"600px",transition:"dialog-top-transition"},{default:i(()=>[a(q,{class:"rounded-xl"},{default:i(()=>[a(bt,{modelValue:g.value,"onUpdate:modelValue":l[4]||(l[4]=u=>g.value=u)},{default:i(()=>[a(oe,{value:1,class:"bg-white"},{default:i(()=>[a(ee,{class:"ma-0"},{default:i(()=>[a(D,{cols:"9",class:"d-flex",style:{"justify-content":"center","align-items":"center","flex-direction":"column"}},{default:i(()=>[a(et)]),_:1}),a(D,{cols:"3",class:"bg-mainColor d-flex",style:{"justify-content":"center","align-items":"center","flex-direction":"column",height:"400px"}},{default:i(()=>[wt,a(k,{onClick:l[2]||(l[2]=u=>g.value++),variant:"outlined"},{default:i(()=>[S(" 註冊 ")]),_:1})]),_:1})]),_:1})]),_:1}),a(oe,{value:2,class:"bg-white position-relative"},{default:i(()=>[a(ee,{class:"ma-0"},{default:i(()=>[a(D,{cols:"3",class:"bg-mainColor d-flex",style:{"justify-content":"center","align-items":"center","flex-direction":"column",height:"600px"}},{default:i(()=>[St,a(k,{onClick:l[3]||(l[3]=u=>g.value--),variant:"outlined"},{default:i(()=>[S("登入")]),_:1})]),_:1}),a(D,{cols:"9",class:"d-flex",style:{"justify-content":"center","align-items":"center","flex-direction":"column",height:"600px"}},{default:i(()=>[a(tt)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])]),_:1})),j(t).isLogin?(V(),I(k,{key:1,width:"16%",height:"100%",variant:"text","prepend-icon":"mdi-logout",onClick:b},{default:i(()=>[S(" 登出 ")]),_:1})):X("",!0)]),_:1},8,["modelValue"])],64)),a(lt),(V(),I(C,{key:x.$route.path}))]),_:1})}}};export{Mt as default};
