import{s as M,b0 as Ke,l as f,bo as He,x as j,n as G,bp as x,r as P,p as B,K as ae,b8 as de,aZ as qe,aj as Ue,bq as Je,ah as O,b as N,d as $,g as F,O as h,u as E,c as v,aJ as W,M as ze,br as We,o as ve,A as Ye,bs as fe,av as le,aw as me,J as ye,aY as ge,ax as Se,ay as pe,az as Ze,e as be,au as he,al as Qe,aG as Xe,w as et,f as Ce,aB as ke,aC as tt,L as Ie,a_ as we,aD as Ve,aE as Pe,bt as nt,q as at,aH as lt,F as se,aK as ie,a5 as re,E as st,a as ue,ai as it,bu as I,D as Ae,N as rt,P as ut,aS as ot}from"./index-4abd011f.js";import{V as ct}from"./VDivider-c669fa6a.js";function dt(){const e=M(!1);return Ke(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:f(()=>e.value?void 0:{transition:"none !important"}),isBooted:He(e)}}const Y=Symbol.for("vuetify:list");function Le(){const e=j(Y,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return G(Y,l),e}function Be(){return j(Y,null)}const vt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Oe={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},ft={open:Oe.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},Q=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=x(n),e&&!s){const i=Array.from(a.entries()).reduce((r,p)=>{let[y,g]=p;return g==="on"?[...r,y]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},Me=e=>{const l=Q(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=x(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},mt=e=>{const l=Q(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=x(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},yt=e=>{const l=Me(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=x(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},gt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=x(n);const p=new Map(a),y=[n];for(;y.length;){const u=y.shift();a.set(u,s?"on":"off"),i.has(u)&&y.push(...i.get(u))}let g=r.get(n);for(;g;){const u=i.get(g),o=u.every(c=>a.get(c)==="on"),d=u.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,o?"on":d?"off":"indeterminate"),g=r.get(g)}return e&&!s&&Array.from(a.entries()).reduce((o,d)=>{let[c,m]=d;return m==="on"?[...o,c]:o},[]).length===0?p:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},_=Symbol.for("vuetify:nested"),xe={id:M(),root:{register:()=>null,unregister:()=>null,parents:P(new Map),children:P(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:P(new Set),selected:P(new Map),selectedValues:P([])}},St=B({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),pt=e=>{let l=!1;const t=P(new Map),n=P(new Map),s=ae(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return yt(e.mandatory);case"leaf":return mt(e.mandatory);case"independent":return Q(e.mandatory);case"single-independent":return Me(e.mandatory);case"classic":default:return gt(e.mandatory)}}),i=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ft;case"single":return vt;case"multiple":default:return Oe}}),r=ae(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));de(()=>{l=!0});function p(u){const o=[];let d=u;for(;d!=null;)o.unshift(d),d=n.value.get(d);return o}const y=qe("nested"),g={id:M(),root:{opened:s,selected:r,selectedValues:f(()=>{const u=[];for(const[o,d]of r.value.entries())d==="on"&&u.push(o);return u}),register:(u,o,d)=>{o&&u!==o&&n.value.set(u,o),d&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const o=n.value.get(u);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(c=>c!==u))}n.value.delete(u),s.value.delete(u)},open:(u,o,d)=>{y.emit("click:open",{id:u,value:o,path:p(u),event:d});const c=i.value.open({id:u,value:o,opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},openOnSelect:(u,o,d)=>{const c=i.value.select({id:u,value:o,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:d});c&&(s.value=c)},select:(u,o,d)=>{y.emit("click:select",{id:u,value:o,path:p(u),event:d});const c=a.value.select({id:u,value:o,selected:new Map(r.value),children:t.value,parents:n.value,event:d});c&&(r.value=c),g.root.openOnSelect(u,o,d)},children:t,parents:n}};return G(_,g),g.root},_e=(e,l)=>{const t=j(_,xe),n=Symbol(Ue()),s=f(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:f(()=>t.root.opened.value.has(s.value)),parent:f(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:f(()=>t.root.selected.value.get(x(s.value))==="on"),isIndeterminate:f(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:f(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),de(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&G(_,a),a},bt=()=>{const e=j(_,xe);G(_,{...e,isGroupActivator:!0})},ht=Je({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return bt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ct=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:O,default:"$collapse"},expandIcon:{type:O,default:"$expand"},prependIcon:O,appendIcon:O,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...$()},"VListGroup"),oe=F()({name:"VListGroup",props:Ct(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=_e(h(e,"value"),!0),i=f(()=>`v-list-group--id-${String(a.value)}`),r=Be(),{isBooted:p}=dt();function y(d){s(!n.value,d)}const g=f(()=>({onClick:y,class:"v-list-group__header",id:i.value})),u=f(()=>n.value?e.collapseIcon:e.expandIcon),o=f(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return E(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&v(W,{defaults:o.value},{default:()=>[v(ht,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),v(ze,{transition:{component:We},disabled:!p.value},{default:()=>{var d;return[ve(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(d=t.default)==null?void 0:d.call(t)]),[[Ye,n.value]])]}})]})),{}}});const kt=fe("v-list-item-subtitle"),It=fe("v-list-item-title"),wt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:O,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:O,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:le(),onClickOnce:le(),...me(),...N(),...ye(),...ge(),...Se(),...pe(),...Ze(),...$(),...be(),...he({variant:"text"})},"VListItem"),ce=F()({name:"VListItem",directives:{Ripple:Qe},props:wt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=Xe(e,t),i=f(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:p,isIndeterminate:y,isGroupActivator:g,root:u,parent:o,openOnSelect:d}=_e(i,!1),c=Be(),m=f(()=>{var S;return e.active!==!1&&(e.active||((S=a.isActive)==null?void 0:S.value)||p.value)}),w=f(()=>e.link!==!1&&a.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!c)),A=f(()=>e.rounded||e.nav),L=f(()=>e.color??e.activeColor),R=f(()=>({color:m.value?L.value??e.baseColor:e.baseColor,variant:e.variant}));et(()=>{var S;return(S=a.isActive)==null?void 0:S.value},S=>{S&&o.value!=null&&u.open(o.value,!0),S&&d(S)},{immediate:!0});const{themeClasses:K}=Ce(e),{borderClasses:H}=ke(e),{colorClasses:q,colorStyles:U,variantClasses:V}=tt(R),{densityClasses:b}=Ie(e),{dimensionStyles:T}=we(e),{elevationClasses:je}=Ve(e),{roundedClasses:Ge}=Pe(A),Ne=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),J=f(()=>({isActive:m.value,select:r,isSelected:p.value,isIndeterminate:y.value}));function X(S){var D;s("click",S),!(g||!k.value)&&((D=a.navigate)==null||D.call(a,S),e.value!=null&&r(!p.value,S))}function $e(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),X(S))}return E(()=>{const S=w.value?"a":e.tag,D=n.title||e.title!=null,Ee=n.subtitle||e.subtitle!=null,ee=!!(e.appendAvatar||e.appendIcon),Re=!!(ee||n.append),te=!!(e.prependAvatar||e.prependIcon),z=!!(te||n.prepend);return c==null||c.updateHasPrepend(z),e.activeColor&&nt("active-color",["color","base-color"]),ve(v(S,{class:["v-list-item",{"v-list-item--active":m.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!z&&(c==null?void 0:c.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&m.value},K.value,H.value,q.value,b.value,je.value,Ne.value,Ge.value,V.value,e.class],style:[U.value,T.value,e.style],href:a.href.value,tabindex:k.value?c?-2:0:void 0,onClick:X,onKeydown:k.value&&!w.value&&$e},{default:()=>{var ne;return[lt(k.value||m.value,"v-list-item"),z&&v("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?v(W,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var C;return[(C=n.prepend)==null?void 0:C.call(n,J.value)]}}):v(se,null,[e.prependAvatar&&v(ie,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(re,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),v("div",{class:"v-list-item__spacer"},null)]),v("div",{class:"v-list-item__content","data-no-activator":""},[D&&v(It,{key:"title"},{default:()=>{var C;return[((C=n.title)==null?void 0:C.call(n,{title:e.title}))??e.title]}}),Ee&&v(kt,{key:"subtitle"},{default:()=>{var C;return[((C=n.subtitle)==null?void 0:C.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ne=n.default)==null?void 0:ne.call(n,J.value)]),Re&&v("div",{key:"append",class:"v-list-item__append"},[n.append?v(W,{key:"append-defaults",disabled:!ee,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var C;return[(C=n.append)==null?void 0:C.call(n,J.value)]}}):v(se,null,[e.appendIcon&&v(re,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(ie,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),v("div",{class:"v-list-item__spacer"},null)])]}}),[[at("ripple"),k.value&&e.ripple]])}),{}}}),Vt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...$()},"VListSubheader"),Pt=F()({name:"VListSubheader",props:Vt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=st(h(e,"color"));return E(()=>{const a=!!(t.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&v("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),At=B({items:Array,returnObject:Boolean},"VListChildren"),Fe=F()({name:"VListChildren",props:At(),setup(e,l){let{slots:t}=l;return Le(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var o,d;let{children:i,props:r,type:p,raw:y}=a;if(p==="divider")return((o=t.divider)==null?void 0:o.call(t,{props:r}))??v(ct,r,null);if(p==="subheader")return((d=t.subheader)==null?void 0:d.call(t,{props:r}))??v(Pt,r,null);const g={subtitle:t.subtitle?c=>{var m;return(m=t.subtitle)==null?void 0:m.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var m;return(m=t.prepend)==null?void 0:m.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var m;return(m=t.append)==null?void 0:m.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var m;return(m=t.title)==null?void 0:m.call(t,{...c,item:y})}:void 0},u=oe.filterProps(r);return i?v(oe,ue({value:r==null?void 0:r.value},u),{activator:c=>{let{props:m}=c;const w={...r,...m,value:e.returnObject?y:r.value};return t.header?t.header({props:w}):v(ce,w,g)},default:()=>v(Fe,{items:i},t)}):t.item?t.item({props:r}):v(ce,ue(r,{value:e.returnObject?y:r.value}),g)}))}}}),Lt=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:it}},"list-items");function Z(e,l){const t=I(l,e.itemTitle,l),n=I(l,e.itemValue,t),s=I(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Ae(l,["children"]):l:void 0:I(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?Te(e,s):void 0,raw:l}}function Te(e,l){const t=[];for(const n of l)t.push(Z(e,n));return t}function Tt(e){const l=f(()=>Te(e,e.items)),t=f(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?Z(e,i):l.value.find(r=>e.valueComparator(i,r.value))||Z(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Bt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ot(e,l){const t=I(l,e.itemType,"item"),n=Bt(l)?l:I(l,e.itemTitle),s=I(l,e.itemValue,void 0),a=I(l,e.itemChildren),i=e.itemProps===!0?Ae(l,["children"]):I(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?De(e,a):void 0,raw:l}}function De(e,l){const t=[];for(const n of l)t.push(Ot(e,n));return t}function Mt(e){return{items:f(()=>De(e,e.items))}}const xt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...St({selectStrategy:"single-leaf",openStrategy:"list"}),...me(),...N(),...ye(),...ge(),...Se(),itemType:{type:String,default:"type"},...Lt(),...pe(),...$(),...be(),...he({variant:"text"})},"VList"),Dt=F()({name:"VList",props:xt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Mt(e),{themeClasses:s}=Ce(e),{backgroundColorClasses:a,backgroundColorStyles:i}=rt(h(e,"bgColor")),{borderClasses:r}=ke(e),{densityClasses:p}=Ie(e),{dimensionStyles:y}=we(e),{elevationClasses:g}=Ve(e),{roundedClasses:u}=Pe(e),{open:o,select:d}=pt(e),c=f(()=>e.lines?`v-list--${e.lines}-line`:void 0),m=h(e,"activeColor"),w=h(e,"baseColor"),k=h(e,"color");Le(),ut({VListGroup:{activeColor:m,baseColor:w,color:k,expandIcon:h(e,"expandIcon"),collapseIcon:h(e,"collapseIcon")},VListItem:{activeClass:h(e,"activeClass"),activeColor:m,baseColor:w,color:k,density:h(e,"density"),disabled:h(e,"disabled"),lines:h(e,"lines"),nav:h(e,"nav"),slim:h(e,"slim"),variant:h(e,"variant")}});const A=M(!1),L=P();function R(b){A.value=!0}function K(b){A.value=!1}function H(b){var T;!A.value&&!(b.relatedTarget&&((T=L.value)!=null&&T.contains(b.relatedTarget)))&&V()}function q(b){if(L.value){if(b.key==="ArrowDown")V("next");else if(b.key==="ArrowUp")V("prev");else if(b.key==="Home")V("first");else if(b.key==="End")V("last");else return;b.preventDefault()}}function U(b){A.value=!0}function V(b){if(L.value)return ot(L.value,b)}return E(()=>v(e.tag,{ref:L,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},s.value,a.value,r.value,p.value,g.value,c.value,u.value,e.class],style:[i.value,y.value,e.style],tabindex:e.disabled||A.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:R,onFocusout:K,onFocus:H,onKeydown:q,onMousedown:U},{default:()=>[v(Fe,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:d,focus:V}}});export{Dt as V,ce as a,It as b,Tt as c,oe as d,Lt as m,dt as u};
