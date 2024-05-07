import{am as U,S as j,T as L,R as M,r as h,an as X,W as Y,X as c,Y as u,Z as t,ab as Z,c as e,a9 as d,aa as p,$ as B,a4 as _,aj as z,_ as H,ao as J,af as y,a6 as V,a0 as K,a2 as O,V as k,a1 as v}from"./index-ee21c5dd.js";import{c as Q,a as f,e as ee,f as F,g as te,u as oe,b as n}from"./index.esm-d526d2cb.js";import{a as P,V as ae}from"./VList-8c1de52e.js";import{V as x}from"./VRow-c2407045.js";import{V as l}from"./VCol-1ff7b675.js";import{V as w}from"./VDivider-2483a20b.js";import{V as re}from"./VForm-f87dc042.js";import{V as G}from"./VSelect-0eea4c94.js";import{V as le}from"./VCheckbox-057d2579.js";import"./VSlideGroup-8bc9ab4b.js";const se={style:{color:"#e76813"}},ie={key:0},ce={key:1},ne={style:{"font-weight":"700",color:"#e76813"}},ue=d("h2",{style:{"margin-top":"30px"}},"收件資訊",-1),de=d("h2",null,"抱歉，該票券已售出或下架",-1),Pe={__name:"PayView",setup(me){const $=U(),q=j(),{api:D,apiAuth:S}=Z(),b=L();M();const N=["信用卡","轉帳","linepay"],T=["面交","超商取貨","宅配"],m=h(""),E=["7-11","全家"],g=h("7-11"),a=h({_id:"",name:"",date:"",performer:"",originalPrice:0,price:0,description:"",categoryCountry:"",categoryGroup:"",sell:!0}),I=Q({name:f().required("缺少演唱會名稱"),date:ee().required("缺少演唱會日期").min(new Date,"日期須大於今天"),performer:f().required("缺少表演者名稱"),originalPrice:F().typeError("票券原價格式錯誤，請填寫數字").required("請填寫票券原價").min(0,"價格不能小於0"),price:F().typeError("票券售價格式錯誤，請填寫數字").required("請填寫票券售價").min(0,"價格不能小於0"),description:f(),categoryCountry:f().required("請選擇表演者國籍").test("isCategoryCountry","表演者國籍有誤",o=>CategoryCountry.includes(o)),categoryGroup:f().required("請選擇表演者性質").test("isCategoryGroup","表演者性質有誤",o=>CategoryGroup.includes(o)),sell:te()}),{handleSubmit:R,isSubmitting:C,resetForm:pe}=oe({validationSchema:I,initialValues:{name:"",performer:"",originalPrice:0,price:0,description:"",categoryCountry:"",categoryGroup:"",sell:!1}});n("name"),n("date"),n("performer"),n("originalPrice"),n("price"),n("description"),n("categoryCountry"),n("categoryGroup"),n("sell");const W=R(async o=>{var s,r;try{dialogId.value===""?await S.post("/tickets",{name:o.name,date:o.date,performer:o.performer,originalPrice:o.originalPrice,price:o.price,description:o.description,categoryCountry:o.categoryCountry,categoryGroup:o.categoryGroup,sell:o.sell}):await S.patch("/tickets/"+dialogId.value,{name:o.name,date:o.date,performer:o.performer,originalPrice:o.originalPrice,price:o.price,description:o.description,categoryCountry:o.categoryCountry,categoryGroup:o.categoryGroup,sell:o.sell}),b({text:dialogId.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(i){console.log(i);const A=((r=(s=i==null?void 0:i.response)==null?void 0:s.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";b({text:A,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return X(async()=>{var o,s;try{const{data:r}=await D.get("/tickets/"+$.params.id);a.value._id=r.result._id,a.value.name=r.result.name,a.value.date=r.result.date,a.value.performer=r.result.performer,a.value.originalPrice=r.result.originalPrice,a.value.price=r.result.price,a.value.description=r.result.description,a.value.categoryCountry=r.result.categoryCountry,a.value.categoryGroup=r.result.categoryGroup,a.value.sell=r.result.sell,document.title=`GoConcert - ${a.value.name}`}catch(r){const i=((s=(o=r==null?void 0:r.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";b({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),q.push("/")}}),(o,s)=>{const r=Y("container");return c(),u(r,{style:{"align-items":"center",width:"90%","justify-content":"center",display:"flex","padding-top":"30px",margin:"auto"}},{default:t(()=>[e(ae,{style:{width:"800px","background-color":"rgba(256, 256, 256, 0.8)"}},{default:t(()=>[e(P,null,{default:t(()=>[e(x,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[d("h1",se,p(a.value.name),1)]),_:1}),e(w),e(l,{cols:"12",md:"6"},{default:t(()=>[d("h3",null,"表演者："+p(a.value.performer),1)]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[d("h3",null,"原價："+p(a.value.originalPrice),1)]),_:1}),e(l,{cols:"12"},{default:t(()=>[d("h3",null,"演出日期："+p(a.value.date),1)]),_:1}),e(l,{cols:"12"},{default:t(()=>[a.value.description.length>0?(c(),B("h3",ie,"其他說明："+p(a.value.description),1)):(c(),B("h3",ce,"其他說明：無"))]),_:1}),e(w),e(l,{cols:"12"},{default:t(()=>[d("h2",ne,"售價：NT$ "+p(a.value.price),1)]),_:1})]),_:1})]),_:1}),e(w),e(P,{style:{"background-color":"#FFFBE6"}}),e(P,null,{default:t(()=>[a.value.sell?(c(),u(re,{key:0,disabled:_(C),onSubmit:z(_(W),["prevent"])},{default:t(()=>[e(H,null,{default:t(()=>[ue,e(J,null,{default:t(()=>[e(x,{"no-gutters":""},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(y,{label:"收件人姓名"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(y,{label:"連絡電話"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(y,{label:"電子信箱"})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(G,{label:"交貨方式",items:T,modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=i=>m.value=i)},null,8,["modelValue"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[m.value==="宅配"?(c(),u(y,{key:0,label:"宅配地址"})):V("",!0)]),_:1}),e(l,{cols:"12",md:"5"},{default:t(()=>[m.value==="超商取貨"?(c(),u(G,{key:0,label:"請選擇超商",items:E,modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=i=>g.value=i)},null,8,["modelValue"])):V("",!0)]),_:1}),m.value==="超商取貨"&&g.value==="7-11"?(c(),u(l,{key:0,cols:"12",md:"5","offset-md":"2"},{default:t(()=>[e(y,{label:"7-11店號"})]),_:1})):V("",!0),m.value==="超商取貨"&&g.value==="全家"?(c(),u(l,{key:1,cols:"12",md:"6","offset-md":"1"},{default:t(()=>[e(y,{label:"全家店號"})]),_:1})):V("",!0),e(l,{cols:"12"},{default:t(()=>[e(G,{label:"付款方式",items:N})]),_:1}),e(l,{cols:"12"})]),_:1}),e(le,{label:"我已閱讀並同意服務條款"})]),_:1}),e(K,null,{default:t(()=>[e(O),e(k,{color:"red",disabled:_(C),onClick:o.closeDialog},{default:t(()=>[v("返回")]),_:1},8,["disabled","onClick"]),e(k,{color:"green",type:"submit",loading:_(C)},{default:t(()=>[v("確認送出訂單")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])):(c(),u(x,{key:1,style:{"text-align":"center","align-items":"center"},class:"py-4"},{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[de]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(k,{color:"textPrimary",to:"/tickets"},{default:t(()=>[v("返回")]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}}};export{Pe as default};