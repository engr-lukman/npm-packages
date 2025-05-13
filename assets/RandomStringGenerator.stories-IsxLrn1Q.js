const G="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",L=(e=32,n={})=>{const r=n.useTimestampPrefix?Date.now().toString(36):"",t=n.useTimestampPrefix?Math.max(1,e-r.length):e,a=k(t,G);return(r+a).slice(0,e)},k=(e=32,n=G)=>{if(e<1)throw new Error("Length must be at least 1");if(n.length===0)throw new Error("Character set cannot be empty");let r="";const t=n.length;if(typeof crypto<"u"&&crypto.getRandomValues){const a=new Uint32Array(e);crypto.getRandomValues(a);for(let g=0;g<e;g++)r+=n.charAt(a[g]%t)}else for(let a=0;a<e;a++)r+=n.charAt(Math.floor(Math.random()*t));return r},V={title:"Utilities/RandomStringGenerator",argTypes:{length:{control:{type:"number",min:1,max:100},defaultValue:32,description:"The length of the random string to generate"},charset:{control:"text",defaultValue:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",description:"Character set to use for custom string generation"},useTimestampPrefix:{control:"boolean",defaultValue:!1,description:"Whether to use a timestamp prefix for uniqueness"},refreshCount:{control:{type:"number"},defaultValue:0,description:"Change this value to regenerate the strings"}}},p=({length:e,useTimestampPrefix:n,refreshCount:r})=>{const t=L(e,{useTimestampPrefix:n});return{template:`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p>Using timestamp prefix: {{ useTimestampPrefix ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    `,data(){return{randomString:t,length:e,useTimestampPrefix:n}}}},U=({length:e,charset:n,refreshCount:r})=>{const t=k(e,n);return{template:`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator with Custom Charset</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p><strong>Using character set:</strong> <code>{{ charset }}</code></p>
        </div>
      </div>
    `,data(){return{randomString:t,length:e,charset:n}}}},o=p.bind({});o.args={length:32,useTimestampPrefix:!1,refreshCount:0};const s=p.bind({});s.args={length:32,useTimestampPrefix:!0,refreshCount:0};const i=p.bind({});i.args={length:8,useTimestampPrefix:!1,refreshCount:0};const d=U.bind({});d.args={length:16,charset:"0123456789ABCDEF",refreshCount:0};const m=U.bind({});m.args={length:10,charset:"0123456789",refreshCount:0};var h,l,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  length,
  useTimestampPrefix,
  refreshCount
}) => {
  const randomString = generateRandomString(length, {
    useTimestampPrefix
  });
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p>Using timestamp prefix: {{ useTimestampPrefix ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    \`,
    data() {
      return {
        randomString,
        length,
        useTimestampPrefix
      };
    }
  };
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,f,S;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
  length,
  useTimestampPrefix,
  refreshCount
}) => {
  const randomString = generateRandomString(length, {
    useTimestampPrefix
  });
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p>Using timestamp prefix: {{ useTimestampPrefix ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    \`,
    data() {
      return {
        randomString,
        length,
        useTimestampPrefix
      };
    }
  };
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,b,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`({
  length,
  useTimestampPrefix,
  refreshCount
}) => {
  const randomString = generateRandomString(length, {
    useTimestampPrefix
  });
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p>Using timestamp prefix: {{ useTimestampPrefix ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    \`,
    data() {
      return {
        randomString,
        length,
        useTimestampPrefix
      };
    }
  };
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,C,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`({
  length,
  charset,
  refreshCount
}) => {
  const randomString = generateRandomStringWithCharset(length, charset);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator with Custom Charset</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p><strong>Using character set:</strong> <code>{{ charset }}</code></p>
        </div>
      </div>
    \`,
    data() {
      return {
        randomString,
        length,
        charset
      };
    }
  };
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var R,T,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`({
  length,
  charset,
  refreshCount
}) => {
  const randomString = generateRandomStringWithCharset(length, charset);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator with Custom Charset</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p><strong>Using character set:</strong> <code>{{ charset }}</code></p>
        </div>
      </div>
    \`,
    data() {
      return {
        randomString,
        length,
        charset
      };
    }
  };
}`,...(P=(T=m.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};const A=["DefaultRandomString","UniqueRandomString","ShortRandomString","CustomCharsetString","NumbersOnlyString"];export{d as CustomCharsetString,o as DefaultRandomString,m as NumbersOnlyString,i as ShortRandomString,s as UniqueRandomString,A as __namedExportsOrder,V as default};
