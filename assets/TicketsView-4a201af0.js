import{T as P,r as o,X as _,Y as w,Z as n,c as r,ad as x,ax as C,V as A,a9 as I,ab as S}from"./index-472d0ee0.js";import{V as T,a as m}from"./VRow-88b978d7.js";import{c as F}from"./VList-54ec541c.js";import{a as U}from"./VDataTableServer-832218e4.js";import"./VSlideGroup-e588eb32.js";const D=I("h1",null,"票券管理",-1),R={__name:"TicketsView",setup(L){const{apiAuth:k}=S(),f=P(),V=e=>{e?(dialogId.value=e._id,seller.value.value=e.seller,seller.value.value=e.seller,price.value.value=e.price,description.value.value=e.description,category.value.value=e.category,sell.value.value=e.sell):dialogId.value="",dialog.value=!0},d=o(10),i=o([{key:"createdAt",order:"desc"}]),u=o(1),p=o([]),h=[{title:"賣家",align:"center",sortable:!0,key:"seller"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"表演者",align:"center",sortable:!0,key:"performer"},{title:"原價",align:"center",sortable:!0,key:"originalPrice"},{title:"售價",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"categoryCountry"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],v=o(!0),b=o(0),c=o(""),s=async()=>{var e,t,a,g;v.value=!0;try{const{data:l}=await k.get("/tickets/all",{params:{page:u.value,itemsPerPage:d.value,sortBy:((e=i.value[0])==null?void 0:e.key)||"createdAt",sortOrder:((t=i.value[0])==null?void 0:t.order)==="asc"?1:-1,search:c.value}});p.value.splice(0,p.value.length,...l.result.data),b.value=l.result.total}catch(l){console.log(l);const B=((g=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:g.message)||"發生錯誤，請稍後再試";f({text:B,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}v.value=!1};s();const y=()=>{u.value=1,s()};return(e,t)=>(_(),w(T,{class:"pa-8 ma-0"},{default:n(()=>[r(m,{cols:"12"},{default:n(()=>[D,r(F)]),_:1}),r(m,{cols:"12"},{default:n(()=>[r(x,{label:"搜尋","append-icon":"mdi-magnify",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=a=>c.value=a),"onClick:append":y,onKeydown:C(y,["enter"])},null,8,["modelValue"])]),_:1}),r(m,{cols:"12",style:{"background-color":"#FFFBE6"}},{default:n(()=>[r(U,{"items-per-page":d.value,"onUpdate:itemsPerPage":[t[1]||(t[1]=a=>d.value=a),s],"sort-by":i.value,"onUpdate:sortBy":[t[2]||(t[2]=a=>i.value=a),s],page:u.value,"onUpdate:page":[t[3]||(t[3]=a=>u.value=a),s],items:p.value,headers:h,loading:v.value,"items-length":b.value,search:c.value,hover:""},{"item.edit":n(({item:a})=>[r(A,{icon:"mdi-pencil",variant:"text",color:"grey",onClick:g=>V(a)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}))}};export{R as default};
