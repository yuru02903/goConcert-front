import{T as O,r as n,X as R,$ as X,c as e,Z as t,a8 as Z,F as j,ab as z,V as k,a1 as v,a4 as a,ai as G,_ as H,a3 as J,aa as K,am as Q,af as c,a0 as W,a2 as Y,a9 as ee}from"./index-c58a86af.js";import{c as ae,a as F,e as x,V as le}from"./index.esm-ad1d64b1.js";import{u as te,a as m}from"./vee-validate.esm-4345f00f.js";import{V as M,a as d}from"./VRow-965a2736.js";import{V as se}from"./VDivider-841cc530.js";const oe=ee("h1",null,"座位管理",-1),ve={__name:"SeatsView",setup(re){const{apiAuth:C}=z(),p=O(),i=n(!1),g=n(""),T=()=>{g.value="",i.value=!0},S=()=>{i.value=!1,A()},U=ae({venue:F().required("缺少場館名稱"),area:F().required("缺少區域名稱"),row:x().typeError("格式錯誤，請填寫數字").required("缺少排數"),seat1:x().typeError("格式錯誤，請填寫數字").required("缺少開始座號"),seat2:x().typeError("格式錯誤，請填寫數字").required("缺少結束座號")}),{handleSubmit:q,isSubmitting:b,resetForm:A}=te({validationSchema:U}),V=m("venue"),f=m("area"),_=m("row"),y=m("seat1"),w=m("seat2"),D=q(async r=>{var l,s;try{for(let o=r.seat1;o<=r.seat2;o++)await C.post("/seats",{venue:r.venue,area:r.area,row:r.row,seat:o});p({text:g.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),S()}catch(o){console.log(o);const u=((s=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";p({text:u,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),I=n(10),B=n([{key:"createdAt",order:"desc"}]),E=n(1),P=n([]),h=n(!0),L=n(0),$=n("");return(async()=>{var r,l,s,o;h.value=!0;try{const{data:u}=await C.get("/tickets/all",{params:{page:E.value,itemsPerPage:I.value,sortBy:((r=B.value[0])==null?void 0:r.key)||"createdAt",sortOrder:((l=B.value[0])==null?void 0:l.order)==="asc"?1:-1,search:$.value}});P.value.splice(0,P.value.length,...u.result.data),L.value=u.result.total}catch(u){console.log(u);const N=((o=(s=u==null?void 0:u.response)==null?void 0:s.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";p({text:N,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}h.value=!1})(),(r,l)=>(R(),X(j,null,[e(M,{class:"py-8 px-4 ma-0"},{default:t(()=>[e(d,{cols:"12",class:""},{default:t(()=>[oe,e(se)]),_:1}),e(d,{cols:"12",style:{position:"absolute",top:"220px"}},{default:t(()=>[e(k,{color:"green",onClick:T,style:{top:"0"}},{default:t(()=>[v("新增座位")]),_:1})]),_:1})]),_:1}),e(Z,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=s=>i.value=s),width:"500px"},{default:t(()=>[e(le,{disabled:a(b),onSubmit:G(a(D),["prevent"])},{default:t(()=>[e(H,null,{default:t(()=>[e(J,null,{default:t(()=>[v(K(g.value===""?"新增座位":"編輯座位"),1)]),_:1}),e(Q,null,{default:t(()=>[e(M,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(c,{label:"場館名稱",clearable:"",modelValue:a(V).value.value,"onUpdate:modelValue":l[0]||(l[0]=s=>a(V).value.value=s),"error-messages":a(V).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{label:"區域",clearable:"",modelValue:a(f).value.value,"onUpdate:modelValue":l[1]||(l[1]=s=>a(f).value.value=s),"error-messages":a(f).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(c,{label:"排數",clearable:"",modelValue:a(_).value.value,"onUpdate:modelValue":l[2]||(l[2]=s=>a(_).value.value=s),"error-messages":a(_).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"開始座號",clearable:"",modelValue:a(y).value.value,"onUpdate:modelValue":l[3]||(l[3]=s=>a(y).value.value=s),"error-messages":a(y).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(c,{label:"結束座號",clearable:"",modelValue:a(w).value.value,"onUpdate:modelValue":l[4]||(l[4]=s=>a(w).value.value=s),"error-messages":a(w).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1}),e(W,null,{default:t(()=>[e(Y),e(k,{color:"red",disabled:a(b),onClick:S},{default:t(()=>[v("取消")]),_:1},8,["disabled"]),e(k,{color:"green",type:"submit",loading:a(b)},{default:t(()=>[v("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64))}};export{ve as default};
