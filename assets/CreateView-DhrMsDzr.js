import{_ as f,r as u,c as I,w as C,o as m,a as g,b as x,v as y,d as e,n as k,e as v,f as b,t as S,g as T,F as $,h as V,p as U,i as B}from"./index-Wi2Pw5h2.js";const F={__name:"MakeCard",props:{backgroundImage:{type:String,required:!0},textColor:{type:String,default:"#000000"}},emits:["update:text"],setup(n,{emit:p}){const a=n,i=p,c=u(""),s=()=>{i("update:text",c.value)},h=I(()=>`background-image: url(${a.backgroundImage})`);return C(()=>a.textColor,r=>{const o=document.querySelector(".card textarea");o&&(o.style.color=r)}),C(()=>a.backgroundImage,r=>{const o=document.querySelector(".card");o&&(o.style.backgroundImage=`url(${r})`)}),(r,o)=>(m(),g("div",{class:"card",style:k(h.value)},[x(e("textarea",{"onUpdate:modelValue":o[0]||(o[0]=l=>c.value=l),onInput:s,style:k({color:a.textColor}),maxlength:"150",placeholder:"Say Something Nice!"},null,36),[[y,c.value]])],4))}},M=f(F,[["__scopeId","data-v-d6c6f5bf"]]),N=["width","height"],q=e("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},null,-1),L=e("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},null,-1),A=[q,L],H={__name:"CopyIcon",props:{width:{type:String,default:"16"},height:{type:String,default:"16"}},setup(n){return(p,a)=>(m(),g("svg",{xmlns:"http://www.w3.org/2000/svg",width:n.width,height:n.height,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-copy"},A,8,N))}},_=n=>(U("data-v-3ece3620"),n=n(),B(),n),R=_(()=>e("h1",null,"Create",-1)),D=_(()=>e("h3",null,[b("Add a message and an image to create a memorable "),e("span",{class:"underlined-text"},"scratch card")],-1)),E={class:"container"},P={class:"fields"},W={class:"color-picker"},j=_(()=>e("span",null,"Text Color",-1)),z={class:"background-image-field"},Z=_(()=>e("span",null,"Background Image",-1)),G={class:"image-input"},J={class:"input-wrapper"},K={key:0,class:"copy-message"},O={__name:"CreateView",setup(n){const p=u(""),a=u("https://images.squarespace-cdn.com/content/551a19f8e4b0e8322a93850a/1573861732601-PTWHSU2HW5BZ9C2IASCM/Intro_Parallax.gif?content-type=image%2Fgif"),i=u("#000000"),c=u(""),s=u(""),h=l=>{const t=document.createElement("textarea");t.value=l,document.body.appendChild(t),t.select();try{document.execCommand("copy"),s.value="Link copied to clipboard!"}catch(d){console.error("Fallback copy failed: ",d),s.value="Failed to copy link"}document.body.removeChild(t)},r=()=>{const l=`${window.location.origin}/card`,t=encodeURIComponent(p.value),d=encodeURIComponent(a.value),w=encodeURIComponent(i.value);c.value=`${l}?text=${t}&img=${d}&color=${w}`,navigator.clipboard?navigator.clipboard.writeText(c.value).then(()=>{s.value="Link copied to clipboard!",setTimeout(()=>{s.value=""},2e3)}).catch(()=>{h(c.value)}):h(c.value)},o=l=>{p.value=l};return(l,t)=>(m(),g($,null,[R,D,e("div",E,[v(M,{backgroundImage:a.value,textColor:i.value,"onUpdate:text":o},null,8,["backgroundImage","textColor"]),e("div",P,[e("div",W,[j,x(e("input",{type:"color","onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d)},null,512),[[y,i.value]])]),e("div",z,[Z,e("div",G,[e("div",J,[v(V,{class:"link-icon"}),x(e("input",{type:"url","onUpdate:modelValue":t[1]||(t[1]=d=>a.value=d)},null,512),[[y,a.value]])])])]),e("button",{class:"create-button",onClick:r,onTouchstart:r,onTouchend:r},[v(H,{width:"15",height:"15"}),b(" Share Card ")],32),s.value?(m(),g("p",K,S(s.value),1)):T("",!0)])])],64))}},X=f(O,[["__scopeId","data-v-3ece3620"]]);export{X as default};
