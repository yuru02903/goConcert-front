import{p as O,b2 as te,aZ as Ee,b as oe,J as Re,e as he,g as N,K as X,aD as ye,l as V,n as Fe,bd as be,P as Le,O as B,u as Y,c as s,be as Oe,s as $,r as j,av as el,a as F,o as ve,q as _e,F as W,a5 as le,bf as ll,x as Me,L as Ue,aV as se,E as tl,N as al,bg as fe,C as ge,D as Ve,bh as nl,d as $e,b9 as Ge,f as Ke,j as ol,b6 as Ce,aF as ul,aH as il,t as sl,aJ as cl,bi as rl,b8 as dl,i as He,aK as vl,bj as fl,aL as ml,aM as hl,bk as yl,y as bl,bl as gl,bm as Vl,bn as pl,bo as ne,A as kl,bp as me,bq as Cl,br as ze,aO as Sl,bs as Se,w as J,bt as Ie,G as Ne,bu as Pe,bv as Il,bw as we,ba as qe,U as Pl,at as xe,aC as re,bx as wl,by as je,bz as xl,aY as Al,bA as Tl,aQ as Bl,B as ie,an as Dl,bB as El,bC as Rl,bD as Fl,bE as Ll,af as Ae,bF as Ol,a1 as _l}from"./index-ee21c5dd.js";import{m as Ml,d as Ul,V as $l,a as Te}from"./VList-8c1de52e.js";import{m as Gl,V as Be}from"./VSlideGroup-8bc9ab4b.js";const We=Symbol.for("vuetify:selection-control-group"),Je=O({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:te,trueIcon:te,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ee},...oe(),...Re(),...he()},"SelectionControlGroup"),Kl=O({...Je({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");N()({name:"VSelectionControlGroup",props:Kl(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:o}=r;const u=X(e,"modelValue"),t=ye(),v=V(()=>e.id||`v-selection-control-group-${t}`),y=V(()=>e.name||v.value),n=new Set;return Fe(We,{modelValue:u,forceUpdate:()=>{n.forEach(l=>l())},onForceUpdate:l=>{n.add(l),be(()=>{n.delete(l)})}}),Le({[e.defaultsTarget]:{color:B(e,"color"),disabled:B(e,"disabled"),density:B(e,"density"),error:B(e,"error"),inline:B(e,"inline"),modelValue:u,multiple:V(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),name:y,falseIcon:B(e,"falseIcon"),trueIcon:B(e,"trueIcon"),readonly:B(e,"readonly"),ripple:B(e,"ripple"),type:B(e,"type"),valueComparator:B(e,"valueComparator")}}),Y(()=>{var l;return s("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=o.default)==null?void 0:l.call(o)])}),{}}});const Xe=O({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...oe(),...Je()},"VSelectionControl");function Hl(e){const r=Me(We,void 0),{densityClasses:o}=Ue(e),u=X(e,"modelValue"),t=V(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=V(()=>e.falseValue!==void 0?e.falseValue:!1),y=V(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),n=V({get(){const k=r?r.modelValue.value:u.value;return y.value?se(k).some(p=>e.valueComparator(p,t.value)):e.valueComparator(k,t.value)},set(k){if(e.readonly)return;const p=k?t.value:v.value;let d=p;y.value&&(d=k?[...se(u.value),p]:se(u.value).filter(a=>!e.valueComparator(a,t.value))),r?r.modelValue.value=d:u.value=d}}),{textColorClasses:l,textColorStyles:g}=tl(V(()=>{if(!(e.error||e.disabled))return n.value?e.color:e.baseColor})),{backgroundColorClasses:I,backgroundColorStyles:x}=al(V(()=>n.value&&!e.error&&!e.disabled?e.color:void 0)),m=V(()=>n.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:o,trueValue:t,falseValue:v,model:n,textColorClasses:l,textColorStyles:g,backgroundColorClasses:I,backgroundColorStyles:x,icon:m}}const De=N()({name:"VSelectionControl",directives:{Ripple:Oe},inheritAttrs:!1,props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:o,slots:u}=r;const{group:t,densityClasses:v,icon:y,model:n,textColorClasses:l,textColorStyles:g,backgroundColorClasses:I,backgroundColorStyles:x,trueValue:m}=Hl(e),k=ye(),p=$(!1),d=$(!1),a=j(),f=V(()=>e.id||`input-${k}`),C=V(()=>!e.disabled&&!e.readonly);t==null||t.onForceUpdate(()=>{a.value&&(a.value.checked=n.value)});function P(h){C.value&&(p.value=!0,fe(h.target,":focus-visible")!==!1&&(d.value=!0))}function w(){p.value=!1,d.value=!1}function G(h){h.stopPropagation()}function Q(h){C.value&&(e.readonly&&t&&ge(()=>t.forceUpdate()),n.value=h.target.checked)}return Y(()=>{var M,z;const h=u.label?u.label({label:e.label,props:{for:f.value}}):e.label,[L,K]=el(o),_=s("input",F({ref:a,checked:n.value,disabled:!!e.disabled,id:f.value,onBlur:w,onFocus:P,onInput:Q,"aria-disabled":!!e.disabled,type:e.type,value:m.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},K),null);return s("div",F({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":p.value,"v-selection-control--focus-visible":d.value,"v-selection-control--inline":e.inline},v.value,e.class]},L,{style:e.style}),[s("div",{class:["v-selection-control__wrapper",l.value],style:g.value},[(M=u.default)==null?void 0:M.call(u,{backgroundColorClasses:I,backgroundColorStyles:x}),ve(s("div",{class:["v-selection-control__input"]},[((z=u.input)==null?void 0:z.call(u,{model:n,textColorClasses:l,textColorStyles:g,backgroundColorClasses:I,backgroundColorStyles:x,inputNode:_,icon:y.value,props:{onFocus:P,onBlur:w,id:f.value}}))??s(W,null,[y.value&&s(le,{key:"icon",icon:y.value},null),_])]),[[_e("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),h&&s(ll,{for:f.value,onClick:G},{default:()=>[h]})])}),{isFocused:p,input:a}}}),zl=O({indeterminate:Boolean,indeterminateIcon:{type:te,default:"$checkboxIndeterminate"},...Xe({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Nl=N()({name:"VCheckboxBtn",props:zl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:o}=r;const u=X(e,"indeterminate"),t=X(e,"modelValue");function v(l){u.value&&(u.value=!1)}const y=V(()=>u.value?e.indeterminateIcon:e.falseIcon),n=V(()=>u.value?e.indeterminateIcon:e.trueIcon);return Y(()=>{const l=Ve(De.filterProps(e),["modelValue"]);return s(De,F(l,{modelValue:t.value,"onUpdate:modelValue":[g=>t.value=g,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:y.value,trueIcon:n.value,"aria-checked":u.value?"mixed":void 0}),o)}),{}}});const Ye=Symbol.for("vuetify:v-chip-group"),ql=O({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ee},...Gl(),...oe(),...nl({selectedClass:"v-chip--selected"}),...$e(),...he(),...Ge({variant:"tonal"})},"VChipGroup");N()({name:"VChipGroup",props:ql(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:o}=r;const{themeClasses:u}=Ke(e),{isSelected:t,select:v,next:y,prev:n,selected:l}=ol(e,Ye);return Le({VChip:{color:B(e,"color"),disabled:B(e,"disabled"),filter:B(e,"filter"),variant:B(e,"variant")}}),Y(()=>{const g=Be.filterProps(e);return s(Be,F(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=o.default)==null?void 0:I.call(o,{isSelected:t,select:v,next:y,prev:n,selected:l.value})]}})}),{}}});const jl=O({activeClass:String,appendAvatar:String,appendIcon:te,closable:Boolean,closeIcon:{type:te,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:te,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Ce(),onClickOnce:Ce(),...ul(),...oe(),...Re(),...il(),...sl(),...cl(),...rl(),...dl(),...$e({tag:"span"}),...he(),...Ge({variant:"tonal"})},"VChip"),Wl=N()({name:"VChip",directives:{Ripple:Oe},props:jl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:o,emit:u,slots:t}=r;const{t:v}=He(),{borderClasses:y}=vl(e),{colorClasses:n,colorStyles:l,variantClasses:g}=fl(e),{densityClasses:I}=Ue(e),{elevationClasses:x}=ml(e),{roundedClasses:m}=hl(e),{sizeClasses:k}=yl(e),{themeClasses:p}=Ke(e),d=X(e,"modelValue"),a=bl(e,Ye,!1),f=gl(e,o),C=V(()=>e.link!==!1&&f.isLink.value),P=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||f.isClickable.value)),w=V(()=>({"aria-label":v(e.closeLabel),onClick(h){h.stopPropagation(),d.value=!1,u("click:close",h)}}));function G(h){var L;u("click",h),P.value&&((L=f.navigate)==null||L.call(f,h),a==null||a.toggle())}function Q(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),G(h))}return()=>{const h=f.isLink.value?"a":e.tag,L=!!(e.appendIcon||e.appendAvatar),K=!!(L||t.append),_=!!(t.close||e.closable),M=!!(t.filter||e.filter)&&a,z=!!(e.prependIcon||e.prependAvatar),q=!!(z||t.prepend),Z=!a||a.isSelected.value;return d.value&&ve(s(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":M,"v-chip--pill":e.pill},p.value,y.value,Z?n.value:void 0,I.value,x.value,m.value,k.value,g.value,a==null?void 0:a.selectedClass.value,e.class],style:[Z?l.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:f.href.value,tabindex:P.value?0:void 0,onClick:G,onKeydown:P.value&&!C.value&&Q},{default:()=>{var H;return[Vl(P.value,"v-chip"),M&&s(pl,{key:"filter"},{default:()=>[ve(s("div",{class:"v-chip__filter"},[t.filter?s(ne,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):s(le,{key:"filter-icon",icon:e.filterIcon},null)]),[[kl,a.isSelected.value]])]}),q&&s("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?s(ne,{key:"prepend-defaults",disabled:!z,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):s(W,null,[e.prependIcon&&s(le,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&s(me,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),s("div",{class:"v-chip__content"},[((H=t.default)==null?void 0:H.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),K&&s("div",{key:"append",class:"v-chip__append"},[t.append?s(ne,{key:"append-defaults",disabled:!L,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):s(W,null,[e.appendIcon&&s(le,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&s(me,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),_&&s("button",F({key:"close",class:"v-chip__close",type:"button"},w.value),[t.close?s(ne,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):s(le,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[_e("ripple"),P.value&&e.ripple,null]])}}});const Jl=O({id:String,...Ve(Cl({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ze}}),["absolute"])},"VMenu"),Xl=N()({name:"VMenu",props:Jl(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:o}=r;const u=X(e,"modelValue"),{scopeId:t}=Sl(),v=ye(),y=V(()=>e.id||`v-menu-${v}`),n=j(),l=Me(Se,null),g=$(0);Fe(Se,{register(){++g.value},unregister(){--g.value},closeParents(){setTimeout(()=>{g.value||(u.value=!1,l==null||l.closeParents())},40)}});async function I(d){var C,P,w;const a=d.relatedTarget,f=d.target;await ge(),u.value&&a!==f&&((C=n.value)!=null&&C.contentEl)&&((P=n.value)!=null&&P.globalTop)&&![document,n.value.contentEl].includes(f)&&!n.value.contentEl.contains(f)&&((w=Pe(n.value.contentEl)[0])==null||w.focus())}J(u,d=>{d?(l==null||l.register(),document.addEventListener("focusin",I,{once:!0})):(l==null||l.unregister(),document.removeEventListener("focusin",I))});function x(){l==null||l.closeParents()}function m(d){var a,f,C;e.disabled||d.key==="Tab"&&(Il(Pe((a=n.value)==null?void 0:a.contentEl,!1),d.shiftKey?"prev":"next",w=>w.tabIndex>=0)||(u.value=!1,(C=(f=n.value)==null?void 0:f.activatorEl)==null||C.focus()))}function k(d){var f;if(e.disabled)return;const a=(f=n.value)==null?void 0:f.contentEl;a&&u.value?d.key==="ArrowDown"?(d.preventDefault(),we(a,"next")):d.key==="ArrowUp"&&(d.preventDefault(),we(a,"prev")):["ArrowDown","ArrowUp"].includes(d.key)&&(u.value=!0,d.preventDefault(),setTimeout(()=>setTimeout(()=>k(d))))}const p=V(()=>F({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":y.value,onKeydown:k},e.activatorProps));return Y(()=>{const d=Ie.filterProps(e);return s(Ie,F({ref:n,id:y.value,class:["v-menu",e.class],style:e.style},d,{modelValue:u.value,"onUpdate:modelValue":a=>u.value=a,absolute:!0,activatorProps:p.value,"onClick:outside":x,onKeydown:m},t),{activator:o.activator,default:function(){for(var a=arguments.length,f=new Array(a),C=0;C<a;C++)f[C]=arguments[C];return s(ne,{root:"VMenu"},{default:()=>{var P;return[(P=o.default)==null?void 0:P.call(o,...f)]}})}})}),Ne({id:y,ΨopenChildren:g},n)}});const Yl=O({renderless:Boolean,...oe()},"VVirtualScrollItem"),Ql=N()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Yl(),emits:{"update:height":e=>!0},setup(e,r){let{attrs:o,emit:u,slots:t}=r;const{resizeRef:v,contentRect:y}=qe(void 0,"border");J(()=>{var n;return(n=y.value)==null?void 0:n.height},n=>{n!=null&&u("update:height",n)}),Y(()=>{var n,l;return e.renderless?s(W,null,[(n=t.default)==null?void 0:n.call(t,{itemRef:v})]):s("div",F({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},o),[(l=t.default)==null?void 0:l.call(t)])})}}),Zl=-1,et=1,de=100,lt=O({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function tt(e,r){const o=Pl(),u=$(0);xe(()=>{u.value=parseFloat(e.itemHeight||0)});const t=$(0),v=$(Math.ceil((parseInt(e.height)||o.height.value)/(u.value||16))||1),y=$(0),n=$(0),l=j(),g=j();let I=0;const{resizeRef:x,contentRect:m}=qe();xe(()=>{x.value=l.value});const k=V(()=>{var i;return l.value===document.documentElement?o.height.value:((i=m.value)==null?void 0:i.height)||parseInt(e.height)||0}),p=V(()=>!!(l.value&&g.value&&k.value&&u.value));let d=Array.from({length:r.value.length}),a=Array.from({length:r.value.length});const f=$(0);let C=-1;function P(i){return d[i]||u.value}const w=wl(()=>{const i=performance.now();a[0]=0;const b=r.value.length;for(let D=1;D<=b-1;D++)a[D]=(a[D-1]||0)+P(D-1);f.value=Math.max(f.value,performance.now()-i)},f),G=J(p,i=>{i&&(G(),I=g.value.offsetTop,w.immediate(),H(),~C&&ge(()=>{je&&window.requestAnimationFrame(()=>{ue(C),C=-1})}))});J(k,(i,b)=>{b&&H()}),be(()=>{w.clear()});function Q(i,b){const D=d[i],E=u.value;u.value=E?Math.min(u.value,b):b,(D!==b||E!==u.value)&&(d[i]=b,w())}function h(i){return i=re(i,0,r.value.length-1),a[i]||0}function L(i){return at(a,i)}let K=0,_=0,M=0;function z(){if(!l.value||!g.value)return;const i=l.value.scrollTop,b=performance.now();b-M>500?(_=Math.sign(i-K),I=g.value.offsetTop):_=i-K,K=i,M=b,H()}function q(){!l.value||!g.value||(_=0,M=0,H())}let Z=-1;function H(){cancelAnimationFrame(Z),Z=requestAnimationFrame(ce)}function ce(){if(!l.value||!k.value)return;const i=K-I,b=Math.sign(_),D=Math.max(0,i-de),E=re(L(D),0,r.value.length),S=i+k.value+de,A=re(L(S)+1,E+1,r.value.length);if((b!==Zl||E<t.value)&&(b!==et||A>v.value)){const T=h(t.value)-h(E),U=h(A)-h(v.value);Math.max(T,U)>de?(t.value=E,v.value=A):(E<=0&&(t.value=E),A>=r.value.length&&(v.value=A))}y.value=h(t.value),n.value=h(r.value.length)-h(v.value)}function ue(i){const b=h(i);!l.value||i&&!b?C=i:l.value.scrollTop=b}const c=V(()=>r.value.slice(t.value,v.value).map((i,b)=>({raw:i,index:b+t.value})));return J(r,()=>{d=Array.from({length:r.value.length}),a=Array.from({length:r.value.length}),w.immediate(),H()},{deep:!0}),{containerRef:l,markerRef:g,computedItems:c,paddingTop:y,paddingBottom:n,scrollToIndex:ue,handleScroll:z,handleScrollend:q,handleItemResize:Q}}function at(e,r){let o=e.length-1,u=0,t=0,v=null,y=-1;if(e[o]<r)return o;for(;u<=o;)if(t=u+o>>1,v=e[t],v>r)o=t-1;else if(v<r)y=t,u=t+1;else return v===r?t:u;return y}const nt=O({items:{type:Array,default:()=>[]},renderless:Boolean,...lt(),...oe(),...xl()},"VVirtualScroll"),ot=N()({name:"VVirtualScroll",props:nt(),setup(e,r){let{slots:o}=r;const u=Al("VVirtualScroll"),{dimensionStyles:t}=Tl(e),{containerRef:v,markerRef:y,handleScroll:n,handleScrollend:l,handleItemResize:g,scrollToIndex:I,paddingTop:x,paddingBottom:m,computedItems:k}=tt(e,B(e,"items"));return Bl(()=>e.renderless,()=>{function p(){var f,C;const a=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[a]("scroll",n,{passive:!0}),document[a]("scrollend",l)):((f=v.value)==null||f[a]("scroll",n,{passive:!0}),(C=v.value)==null||C[a]("scrollend",l))}Dl(()=>{v.value=El(u.vnode.el,!0),p(!0)}),be(p)}),Y(()=>{const p=k.value.map(d=>s(Ql,{key:d.index,renderless:e.renderless,"onUpdate:height":a=>g(d.index,a)},{default:a=>{var f;return(f=o.default)==null?void 0:f.call(o,{item:d.raw,index:d.index,...a})}}));return e.renderless?s(W,null,[s("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:ie(x.value)}},null),p,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ie(m.value)}},null)]):s("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:n,onScrollend:l,style:[t.value,e.style]},[s("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:ie(x.value),paddingBottom:ie(m.value)}},[p])])}),{scrollToIndex:I}}});function ut(e,r){const o=$(!1);let u;function t(n){cancelAnimationFrame(u),o.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{o.value=!1})})}async function v(){await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>{if(o.value){const l=J(o,()=>{l(),n()})}else n()})}async function y(n){var I,x;if(n.key==="Tab"&&((I=r.value)==null||I.focus()),!["PageDown","PageUp","Home","End"].includes(n.key))return;const l=(x=e.value)==null?void 0:x.$el;if(!l)return;(n.key==="Home"||n.key==="End")&&l.scrollTo({top:n.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await v();const g=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(n.key==="PageDown"||n.key==="Home"){const m=l.getBoundingClientRect().top;for(const k of g)if(k.getBoundingClientRect().top>=m){k.focus();break}}else{const m=l.getBoundingClientRect().bottom;for(const k of[...g].reverse())if(k.getBoundingClientRect().bottom<=m){k.focus();break}}}return{onListScroll:t,onListKeydown:y}}const it=O({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:te,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ml({itemChildren:!1})},"Select"),st=O({...it(),...Ve(Rl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Fl({transition:{component:ze}})},"VSelect"),vt=N()({name:"VSelect",props:st(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:o}=r;const{t:u}=He(),t=j(),v=j(),y=j(),n=X(e,"menu"),l=V({get:()=>n.value,set:c=>{var i;n.value&&!c&&((i=v.value)!=null&&i.ΨopenChildren)||(n.value=c)}}),{items:g,transformIn:I,transformOut:x}=Ul(e),m=X(e,"modelValue",[],c=>I(c===null?[null]:se(c)),c=>{const i=x(c);return e.multiple?i:i[0]??null}),k=V(()=>typeof e.counterValue=="function"?e.counterValue(m.value):typeof e.counterValue=="number"?e.counterValue:m.value.length),p=Ll(),d=V(()=>m.value.map(c=>c.value)),a=$(!1),f=V(()=>l.value?e.closeText:e.openText);let C="",P;const w=V(()=>e.hideSelected?g.value.filter(c=>!m.value.some(i=>i===c)):g.value),G=V(()=>e.hideNoData&&!w.value.length||e.readonly||(p==null?void 0:p.isReadonly.value)),Q=V(()=>{var c;return{...e.menuProps,activatorProps:{...((c=e.menuProps)==null?void 0:c.activatorProps)||{},"aria-haspopup":"listbox"}}}),h=j(),{onListScroll:L,onListKeydown:K}=ut(h,t);function _(c){e.openOnClear&&(l.value=!0)}function M(){G.value||(l.value=!l.value)}function z(c){var S,A;if(!c.key||e.readonly||p!=null&&p.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(c.key)&&c.preventDefault(),["Enter","ArrowDown"," "].includes(c.key)&&(l.value=!0),["Escape","Tab"].includes(c.key)&&(l.value=!1),c.key==="Home"?(S=h.value)==null||S.focus("first"):c.key==="End"&&((A=h.value)==null||A.focus("last"));const i=1e3;function b(T){const U=T.key.length===1,R=!T.ctrlKey&&!T.metaKey&&!T.altKey;return U&&R}if(e.multiple||!b(c))return;const D=performance.now();D-P>i&&(C=""),C+=c.key.toLowerCase(),P=D;const E=g.value.find(T=>T.title.toLowerCase().startsWith(C));E!==void 0&&(m.value=[E])}function q(c){if(e.multiple){const i=m.value.findIndex(b=>e.valueComparator(b.value,c.value));if(i===-1)m.value=[...m.value,c];else{const b=[...m.value];b.splice(i,1),m.value=b}}else m.value=[c],l.value=!1}function Z(c){var i;(i=h.value)!=null&&i.$el.contains(c.relatedTarget)||(l.value=!1)}function H(){var c;a.value&&((c=t.value)==null||c.focus())}function ce(c){a.value=!0}function ue(c){if(c==null)m.value=[];else if(fe(t.value,":autofill")||fe(t.value,":-webkit-autofill")){const i=g.value.find(b=>b.title===c);i&&q(i)}else t.value&&(t.value.value="")}return J(l,()=>{if(!e.hideSelected&&l.value&&m.value.length){const c=w.value.findIndex(i=>m.value.some(b=>e.valueComparator(b.value,i.value)));je&&window.requestAnimationFrame(()=>{var i;c>=0&&((i=y.value)==null||i.scrollToIndex(c))})}}),J(w,(c,i)=>{a.value&&(!c.length&&e.hideNoData&&(l.value=!1),!i.length&&c.length&&(l.value=!0))}),Y(()=>{const c=!!(e.chips||o.chip),i=!!(!e.hideNoData||w.value.length||o["prepend-item"]||o["append-item"]||o["no-data"]),b=m.value.length>0,D=Ae.filterProps(e),E=b||!a.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(Ae,F({ref:t},D,{modelValue:m.value.map(S=>S.props.value).join(", "),"onUpdate:modelValue":ue,focused:a.value,"onUpdate:focused":S=>a.value=S,validationValue:m.externalValue,counterValue:k.value,dirty:b,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":m.value.length,"v-select--selection-slot":!!o.selection},e.class],style:e.style,inputmode:"none",placeholder:E,"onClick:clear":_,"onMousedown:control":M,onBlur:Z,onKeydown:z,"aria-label":u(f.value),title:u(f.value)}),{...o,default:()=>s(W,null,[s(Xl,F({ref:v,modelValue:l.value,"onUpdate:modelValue":S=>l.value=S,activator:"parent",contentClass:"v-select__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},Q.value),{default:()=>[i&&s($l,F({ref:h,selected:d.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:K,onFocusin:ce,onScrollPassive:L,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var S,A,T;return[(S=o["prepend-item"])==null?void 0:S.call(o),!w.value.length&&!e.hideNoData&&(((A=o["no-data"])==null?void 0:A.call(o))??s(Te,{title:u(e.noDataText)},null)),s(ot,{ref:y,renderless:!0,items:w.value},{default:U=>{var ke;let{item:R,index:ae,itemRef:ee}=U;const pe=F(R.props,{ref:ee,key:ae,onClick:()=>q(R)});return((ke=o.item)==null?void 0:ke.call(o,{item:R,index:ae,props:pe}))??s(Te,F(pe,{role:"option"}),{prepend:Qe=>{let{isSelected:Ze}=Qe;return s(W,null,[e.multiple&&!e.hideSelected?s(Nl,{key:R.value,modelValue:Ze,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&s(me,{image:R.props.prependAvatar},null),R.props.prependIcon&&s(le,{icon:R.props.prependIcon},null)])}})}}),(T=o["append-item"])==null?void 0:T.call(o)]}})]}),m.value.map((S,A)=>{function T(ee){ee.stopPropagation(),ee.preventDefault(),q(S)}const U={"onClick:close":T,onMousedown(ee){ee.preventDefault(),ee.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},R=c?!!o.chip:!!o.selection,ae=R?Ol(c?o.chip({item:S,index:A,props:U}):o.selection({item:S,index:A})):void 0;if(!(R&&!ae))return s("div",{key:S.value,class:"v-select__selection"},[c?o.chip?s(ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:S.title}}},{default:()=>[ae]}):s(Wl,F({key:"chip",closable:e.closableChips,size:"small",text:S.title,disabled:S.props.disabled},U),null):ae??s("span",{class:"v-select__selection-text"},[S.title,e.multiple&&A<m.value.length-1&&s("span",{class:"v-select__selection-comma"},[_l(",")])])])})]),"append-inner":function(){var U;for(var S=arguments.length,A=new Array(S),T=0;T<S;T++)A[T]=arguments[T];return s(W,null,[(U=o["append-inner"])==null?void 0:U.call(o,...A),e.menuIcon?s(le,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ne({isFocused:a,menu:l,select:q},t)}});export{vt as V,Nl as a,zl as m};