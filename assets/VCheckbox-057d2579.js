import{m as g,a as t}from"./VSelect-0eea4c94.js";import{p as A,ap as F,D as I,g as B,K as D,as as U,aD as R,l as $,u as w,av as K,aw as l,c as u,a as c}from"./index-ee21c5dd.js";const M=A({...F(),...I(g(),["inline"])},"VCheckbox"),q=B()({name:"VCheckbox",inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,r){let{attrs:d,slots:o}=r;const s=D(e,"modelValue"),{isFocused:n,focus:i,blur:m}=U(e),V=R(),p=$(()=>e.id||`checkbox-${V}`);return w(()=>{const[b,k]=K(d),v=l.filterProps(e),x=t.filterProps(e);return u(l,c({class:["v-checkbox",e.class]},b,v,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:p.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:f,messagesId:h,isDisabled:P,isReadonly:C}=a;return u(t,c(x,{id:f.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},k,{modelValue:s.value,"onUpdate:modelValue":y=>s.value=y,onFocus:i,onBlur:m}),o)}})}),{}}});export{q as V};
