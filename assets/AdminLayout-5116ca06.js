import{U as y,l as s,r as c,R as g,W as x,X as o,Y as r,Z as t,_ as h,c as e,a3 as C,a0 as b,V as D,a1 as u,a4 as w,$ as k,a7 as A,F,a5 as L,aa as B}from"./index-6859542d.js";import{a as E,V as d}from"./VRow-10742534.js";import{V as I}from"./VNavigationDrawer-011b741c.js";import{a as m,V as R,b as N}from"./VList-968969b0.js";import{V as P}from"./VDivider-5126788b.js";const W={__name:"AdminLayout",setup(T){const{smAndDown:p}=y();s(()=>p.value);const n=c(!0);c(!0);const l=g(),f=s(()=>`https://source.boringavatars.com/beam/120/${l.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`),_=s(()=>[{to:"/admin",text:"會員管理",icon:"mdi-account"},{to:"/admin/tickets",text:"票券管理",icon:"mdi-ticket-confirmation"},{to:"/admin/seats",text:"座位管理",icon:"mdi-sofa-single"}]);return(V,i)=>{const v=x("RouterView");return o(),r(h,{color:"bgPrimary",style:{height:"100%"},class:"pb-8"},{default:t(()=>[e(d,null,{default:t(()=>[e(E,{cols:"12"},{default:t(()=>[e(C,{color:"textPrimary",class:"text-center justify-center align-center py-3 bb d-flex"},{default:t(()=>[e(b,null,{default:t(()=>[e(D,{class:"font-weight-bold text-h3 text-mainColor",height:"100%",to:"/",active:!1},{default:t(()=>[u("GoConcert")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{class:"pa-0 ma-0",style:{height:"100%"}},{default:t(()=>[e(I,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=a=>n.value=a),permanent:"",style:{position:"relative",float:"left",height:"100%"},color:"bgPrimary"},{default:t(()=>[e(m,{"prepend-avatar":f.value,title:w(l).account,class:"py-4"},null,8,["prepend-avatar","title"]),e(P),e(R,{density:"compact",nav:""},{default:t(()=>[(o(!0),k(F,null,A(_.value,a=>(o(),r(m,{key:a.to,to:a.to,active:!1},{prepend:t(()=>[e(L,{icon:a.icon},null,8,["icon"])]),default:t(()=>[e(N,null,{default:t(()=>[u(B(a.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"]),(o(),r(v,{key:V.$route.path}))]),_:1})]),_:1})}}};export{W as default};