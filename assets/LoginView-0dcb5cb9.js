import{T as C,R as S,S as B,U as F,l as N,W as U,X as c,Y as E,Z as l,ab as M,c as t,af as d,a4 as a,V as T,a1 as m,ai as $,$ as q,a6 as A,a9 as D}from"./index-6859542d.js";import{v as P}from"./index-de59b508.js";import{u as R,a as p}from"./vee-validate.esm-c57ecf30.js";import{c as L,a as v,V as W}from"./index.esm-1d8a1b1e.js";import{V as X}from"./VContainer-cc54d775.js";const Y=D("h1",{class:"text-mainColor pb-4"}," 登入 ",-1),Z={key:0,class:"pt-4",style:{color:"gray"}},K={__name:"LoginView",setup(j){const{api:V}=M(),u=C(),b=S(),f=B(),{smAndDown:g}=F(),_=N(()=>g.value),h=L({email:v().required("信箱為必填欄位").test("isEmail","信箱格式有誤",o=>P.isEmail(o)),password:v().required("密碼為必填欄位").min(8,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:w,isSubmitting:x}=R({validationSchema:h}),n=p("email"),i=p("password"),k=w(async o=>{var s,r;try{const{data:e}=await V.post("/users/login",{email:o.email,password:o.password});b.login(e.result),u({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"top"}}),f.push("/")}catch(e){const y=((r=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";u({text:y,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"top"}})}});return(o,s)=>{const r=U("router-link");return c(),E(X,{class:"px-8 py-12"},{default:l(()=>[Y,t(W,{disabled:a(x),onSubmit:$(a(k),["prevent"])},{default:l(()=>[t(d,{class:"mb-2",label:"電子信箱",type:"email",variant:"underlined","prepend-icon":"mdi-email-outline",modelValue:a(n).value.value,"onUpdate:modelValue":s[0]||(s[0]=e=>a(n).value.value=e),"error-messages":a(n).errorMessage.value},null,8,["modelValue","error-messages"]),t(d,{class:"mb-4",label:"密碼",minlength:"8",maxlength:"20",counter:"",hint:"密碼為8 ~ 20個英數字，區分大小寫",type:"password",variant:"underlined","prepend-icon":"mdi-lock-outline",modelValue:a(i).value.value,"onUpdate:modelValue":s[1]||(s[1]=e=>a(i).value.value=e),"error-messages":a(i).errorMessage.value},null,8,["modelValue","error-messages"]),t(T,{width:"100%",type:"submit",color:"mainColor"},{default:l(()=>[m("登入")]),_:1})]),_:1},8,["disabled","onSubmit"]),_.value?(c(),q("h5",Z,[m("尚未註冊? 前往 "),t(r,{to:"/register",class:"text-mainColor"},{default:l(()=>[m("註冊")]),_:1})])):A("",!0)]),_:1})}}};export{K as default};
