import{U as I,l as c,r as d,R as U,W as v,X as l,Y as r,Z as t,c as a,V as A,ae as M,a4 as f,$ as V,a7 as _,F as y,a5 as k,a1 as b,aa as g}from"./index-4abd011f.js";import{V as w}from"./VNavigationDrawer-70fed7db.js";import{a as u,V as x,b as D}from"./VList-d426be00.js";import{V as C}from"./VDivider-c669fa6a.js";const T={__name:"MemberLayout",setup(N){const{smAndDown:F}=I(),L=c(()=>F.value),n=d(!0),s=d(!0),i=U(),p=c(()=>`https://source.boringavatars.com/beam/120/${i.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`),m=c(()=>[{to:"/member",text:"我的資料",icon:"mdi-account"},{to:"/member/tickets",text:"票券管理",icon:"mdi-ticket-confirmation"}]);return(B,o)=>{const E=v("RouterView"),$=v("row");return l(),r($,{style:{height:"100%"}},{default:t(()=>[L.value?(l(),r(w,{key:0,modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),rail:s.value,permanent:"",onClick:o[2]||(o[2]=e=>s.value=!1),style:{position:"relative",float:"left"},color:"bgPrimary"},{default:t(()=>[a(u,{"prepend-avatar":p.value,title:f(i).account,class:"pt-4"},{append:t(()=>[a(A,{variant:"text",icon:"mdi-chevron-left",onClick:o[0]||(o[0]=M(e=>s.value=!s.value,["stop"]))})]),_:1},8,["prepend-avatar","title"]),a(C),a(x,{density:"compact",nav:""},{default:t(()=>[(l(!0),V(y,null,_(m.value,e=>(l(),r(u,{key:e.to,to:e.to,active:!1},{prepend:t(()=>[a(k,{icon:e.icon},null,8,["icon"])]),default:t(()=>[a(D,null,{default:t(()=>[b(g(e.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue","rail"])):(l(),r(w,{key:1,modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value=e),permanent:"",style:{position:"relative",float:"left",height:"100%"},color:"bgPrimary"},{default:t(()=>[a(u,{"prepend-avatar":p.value,title:f(i).account,class:"py-4"},null,8,["prepend-avatar","title"]),a(C),a(x,{density:"compact",nav:""},{default:t(()=>[(l(!0),V(y,null,_(m.value,e=>(l(),r(u,{key:e.to,to:e.to,active:!1},{prepend:t(()=>[a(k,{icon:e.icon},null,8,["icon"])]),default:t(()=>[a(D,null,{default:t(()=>[b(g(e.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])),(l(),r(E,{key:B.$route.path}))]),_:1})}}};export{T as default};
