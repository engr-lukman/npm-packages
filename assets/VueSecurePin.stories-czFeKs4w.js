import{b as g,d as $,e as I,f,o as b,g as E,j as i,t as _,F as D,k as U,m as V,p as j,n as M,u as k,q as A}from"./vue.esm-bundler-CPygfMJs.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";function O(d){const{maxLength:h}=d,e=g(""),c=g(""),s=$(()=>e.value.length>=h);return{pinMasked:e,pin:c,isMaxLengthReached:s,clear:()=>{e.value="",c.value=""},pinHandler:p=>{s.value||(e.value=`${e.value||""}*`,c.value=`${c.value||""}${p}`)}}}const l={maxLength:5,isError:!1,errorMessage:"",placeholder:"Enter PIN",isEnableShuffle:!0,showKeyboard:!0,title:"Use this keyboard to enter your PIN",clearLabel:"Clear"},T={key:0,class:"numeric-keyboard__title"},F={class:"numeric-keyboard"},q={class:"numeric-keyboard__grid"},z=["onClick"],G=I({__name:"NumericKeyboard",props:{isEnableShuffle:{type:Boolean,default:l.isEnableShuffle},isMaxLengthReached:{type:Boolean,default:!1},title:{default:l.title},clearLabel:{default:l.clearLabel}},emits:["input","clear"],setup(d,{emit:h}){const e=d,c=h,s=g([1,2,3,4,5,6,7,8,9,0]),u=n=>{if(!e.isEnableShuffle)return n;const a=[...n];for(let t=a.length-1;t>0;t--){const m=Math.floor(Math.random()*(t+1));[a[t],a[m]]=[a[m],a[t]]}return a},o=$(()=>e.isEnableShuffle?u([...s.value]):s.value),p=n=>{e.isMaxLengthReached||(e.isEnableShuffle&&(s.value=u(s.value)),c("input",n))};return(n,a)=>(b(),f("div",null,[n.title?(b(),f("div",T,_(n.title),1)):E("",!0),i("div",F,[i("div",q,[(b(!0),f(D,null,U(o.value.slice(0,9),(t,m)=>(b(),f("button",{key:m,class:"numeric-keyboard__button",type:"button",onClick:y=>p(t)},_(t),9,z))),128)),i("button",{class:"numeric-keyboard__button numeric-keyboard__button--double",type:"button",onClick:a[0]||(a[0]=t=>p(o.value[o.value.length-1]))},_(o.value[o.value.length-1]),1),i("button",{class:"numeric-keyboard__button numeric-keyboard__button--clear",type:"button",onClick:a[1]||(a[1]=t=>n.$emit("clear"))},_(n.clearLabel),1)])])]))}}),J=H(G,[["__scopeId","data-v-6f27929e"]]),Q={class:"pin"},W=["data-placeholder"],X={class:"pin__masked-value"},Y={key:0,class:"pin__error",role:"alert"},Z=I({__name:"SecurePin",props:{maxLength:{default:l.maxLength},isError:{type:Boolean,default:l.isError},errorMessage:{default:l.errorMessage},placeholder:{default:l.placeholder},isEnableShuffle:{type:Boolean,default:l.isEnableShuffle},showKeyboard:{type:Boolean,default:l.showKeyboard},title:{default:l.title},clearLabel:{default:l.clearLabel}},emits:["callbackEvent"],setup(d,{expose:h,emit:e}){const c=d,s=e,u=g(c.showKeyboard),o=g(null),{pinMasked:p,pin:n,isMaxLengthReached:a,clear:t,pinHandler:m}=O({maxLength:c.maxLength}),y=()=>{u.value=!u.value},L=()=>{t(),s("callbackEvent",{pin:"",pinMasked:""})},R=r=>{m(r),s("callbackEvent",{pin:n.value,pinMasked:p.value})},S=r=>{o.value&&!o.value.contains(r.target)&&!r.target.closest(".pin__toggle")&&(u.value=!1)};return h({clearHandler:L,toggleKeyboard:y}),V(()=>{document.addEventListener("click",S)}),j(()=>{document.removeEventListener("click",S)}),(r,P)=>(b(),f("div",Q,[i("div",{class:M(["pin__field",{"pin__field--error":r.isError}])},[i("div",{class:M(["pin__display",{"pin__display--empty":!k(p)}]),"data-placeholder":r.placeholder},[i("div",X,_(k(p)),1)],10,W),i("div",{class:"pin__actions"},[i("div",{class:"pin__toggle",onClick:y},P[0]||(P[0]=[i("span",{class:"pin__icon"},"⌨️",-1)]))]),r.isError?(b(),f("div",Y,_(r.errorMessage),1)):E("",!0)],2),u.value?(b(),f("div",{key:0,ref_key:"keyboardPopup",ref:o,class:"pin__keyboard"},[A(J,{"is-enable-shuffle":r.isEnableShuffle,"is-max-length-reached":k(a),title:r.title,"clear-label":r.clearLabel,onInput:R,onClear:L},null,8,["is-enable-shuffle","is-max-length-reached","title","clear-label"])],512)):E("",!0)]))}}),B=H(Z,[["__scopeId","data-v-da465dac"]]),re={title:"Components/Secure Pin (Vue.js)",component:B,argTypes:{callbackEvent:{action:"callbackEvent",description:"Emitted when PIN value changes or clears"}},parameters:{docs:{description:{component:`SecurePin - A secure PIN input component with virtual keyboard 
designed for financial applications`}}}},ee=d=>({components:{SecurePin:B},setup(){return{args:d,onPinHandler:e=>{d.callbackEvent(e)}}},template:`
    <div style="max-width: 500px; margin: 2rem;">
      <SecurePin
        :maxLength="args.maxLength"
        :isError="args.isError"
        :errorMessage="args.errorMessage"
        :placeholder="args.placeholder"
        :isEnableShuffle="args.isEnableShuffle"
        :showKeyboard="args.showKeyboard"
        :title="args.title"
        :clearLabel="args.clearLabel"
        @callbackEvent="onPinHandler"
      />
    </div>
  `}),v={render:ee,args:{maxLength:5,isError:!1,errorMessage:"",placeholder:"Enter PIN",isEnableShuffle:!0,showKeyboard:!0,title:"Use this keyboard to enter your PIN",clearLabel:"Clear"}};var C,x,N,w,K;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: Template,
  args: {
    maxLength: 5,
    isError: false,
    errorMessage: "",
    placeholder: "Enter PIN",
    isEnableShuffle: true,
    showKeyboard: true,
    title: "Use this keyboard to enter your PIN",
    clearLabel: "Clear"
  }
}`,...(N=(x=v.parameters)==null?void 0:x.docs)==null?void 0:N.source},description:{story:"Default example",...(K=(w=v.parameters)==null?void 0:w.docs)==null?void 0:K.description}}};const ne=["Default"];export{v as Default,ne as __namedExportsOrder,re as default};
