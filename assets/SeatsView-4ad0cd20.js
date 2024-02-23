import{r as p,X as M,$ as U,c as e,Z as a,a8 as q,F as B,V as f,a1 as u,a4 as l,ae as D,_ as T,a3 as k,aa as N,be as $,ad as t,a0 as y,a2 as A,a9 as E}from"./index-4abd011f.js";import{c as I,a as d,u as R,b as n,V as X}from"./index.esm-5af910f7.js";import{V as _,a as o}from"./VRow-2081606b.js";import{V as Z}from"./VDivider-c669fa6a.js";const j=E("h1",null,"座位管理",-1),O={__name:"SeatsView",setup(z){const m=p(!1),g=p(""),b=()=>{g.value="",m.value=!0},w=I({venue:d().required("缺少場館名稱"),area:d().required("缺少區域名稱"),row:d().required("缺少排數"),seat:d().required("缺少座號")}),{handleSubmit:x,isSubmitting:S,resetForm:G}=R({validationSchema:w,initialValues:{venue:"",area:"",row:"",seat:""}}),i=n("venue"),V=n("area"),v=n("row"),c=n("seat"),C=x(async F=>{});return(F,s)=>(M(),U(B,null,[e(_,{class:"pa-0 ma-0"},{default:a(()=>[e(o,{cols:"12",class:"text-center pa-8"},{default:a(()=>[j,e(Z)]),_:1}),e(o,{cols:"12"},{default:a(()=>[e(f,{color:"green",onClick:b},{default:a(()=>[u("新增座位")]),_:1})]),_:1})]),_:1}),e(q,{modelValue:m.value,"onUpdate:modelValue":s[4]||(s[4]=r=>m.value=r),width:"500px"},{default:a(()=>[e(X,{disabled:l(S),onSubmit:D(l(C),["prevent"])},{default:a(()=>[e(T,null,{default:a(()=>[e(k,null,{default:a(()=>[u(N(g.value===""?"新增座位":"編輯座位"),1)]),_:1}),e($,null,{default:a(()=>[e(_,null,{default:a(()=>[e(o,{cols:"12"},{default:a(()=>[e(t,{label:"場館名稱",clearable:"",modelValue:l(i).value.value,"onUpdate:modelValue":s[0]||(s[0]=r=>l(i).value.value=r),"error-messages":l(i).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12"},{default:a(()=>[e(t,{label:"區域",clearable:"",modelValue:l(V).value.value,"onUpdate:modelValue":s[1]||(s[1]=r=>l(V).value.value=r),"error-messages":l(V).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12"},{default:a(()=>[e(t,{label:"排數",clearable:"",modelValue:l(v).value.value,"onUpdate:modelValue":s[2]||(s[2]=r=>l(v).value.value=r),"error-messages":l(v).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12"},{default:a(()=>[e(t,{label:"座號",clearable:"",modelValue:l(c).value.value,"onUpdate:modelValue":s[3]||(s[3]=r=>l(c).value.value=r),"error-messages":l(c).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(A),e(f,{color:"red"},{default:a(()=>[u("取消")]),_:1}),e(f,{color:"green"},{default:a(()=>[u("送出")]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64))}};export{O as default};
