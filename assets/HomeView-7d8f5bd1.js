import{T as C,r as s,X as w,Y as P,Z as l,c as a,af as x,ag as A,V as f,_ as I,a9 as L,ab as S}from"./index-ee21c5dd.js";import{V}from"./VRow-c2407045.js";import{V as D}from"./VDivider-2483a20b.js";import{V as v}from"./VCol-1ff7b675.js";import{V as F,a as T}from"./VList-8c1de52e.js";import{V as U}from"./VDataTableServer-e7e46bf6.js";import"./VPagination-153f99fd.js";import"./VSelect-0eea4c94.js";import"./VSlideGroup-8bc9ab4b.js";const N=L("h1",null,"會員管理",-1),q={__name:"HomeView",setup(H){const{apiAuth:k}=S(),h=C(),m=s(10),i=s([{key:"createdAt",order:"desc"}]),u=s(1),p=s([]),_=[{title:"帳號",align:"center",sortable:!0,key:"account"},{title:"身分證",align:"center",sortable:!0,key:"nationalIdNumber"},{title:"email",align:"center",sortable:!0,key:"email"},{title:"查看",align:"center",sortable:!1,key:"eye"},{title:"禁用",align:"center",sortable:!1,key:"cancel"}],g=s(!0),b=s(0),c=s(""),r=async()=>{var n,t,e,d;g.value=!0;try{const{data:o}=await k.get("/users",{params:{page:u.value,itemsPerPage:m.value,sortBy:((n=i.value[0])==null?void 0:n.key)||"createdAt",sortOrder:((t=i.value[0])==null?void 0:t.order)==="asc"?1:-1,search:c.value}});p.value.splice(0,p.value.length,...o.result.data),b.value=o.result.total}catch(o){console.log(o);const B=((d=(e=o==null?void 0:o.response)==null?void 0:e.data)==null?void 0:d.message)||"發生錯誤，請稍後再試";h({text:B,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}g.value=!1};r();const y=()=>{u.value=1,r()};return(n,t)=>(w(),P(V,{class:"py-8 px-4 ma-0"},{default:l(()=>[a(v,{cols:"12",class:""},{default:l(()=>[N,a(D)]),_:1}),a(I,{class:"mx-auto",width:"80%",style:{"background-color":"#FFFBE6"}},{default:l(()=>[a(F,null,{default:l(()=>[a(T,null,{default:l(()=>[a(V,null,{default:l(()=>[a(v,{cols:"12"},{default:l(()=>[a(x,{label:"搜尋","append-icon":"mdi-magnify",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),"onClick:append":y,onKeydown:A(y,["enter"])},null,8,["modelValue"])]),_:1}),a(v,{cols:"12"},{default:l(()=>[a(U,{"items-per-page":m.value,"onUpdate:itemsPerPage":[t[1]||(t[1]=e=>m.value=e),r],"sort-by":i.value,"onUpdate:sortBy":[t[2]||(t[2]=e=>i.value=e),r],page:u.value,"onUpdate:page":[t[3]||(t[3]=e=>u.value=e),r],items:p.value,headers:_,loading:g.value,"items-length":b.value,search:c.value,hover:""},{"item.eye":l(({item:e})=>[a(f,{icon:"mdi-eye",variant:"text",color:"grey",onClick:d=>n.openDialog(e)},null,8,["onClick"])]),"item.cancel":l(({item:e})=>[a(f,{icon:"mdi-close",variant:"text",color:"red",onClick:d=>n.openDialog(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{q as default};
