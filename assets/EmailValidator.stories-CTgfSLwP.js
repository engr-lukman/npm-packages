const C=(o="")=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(o),z={title:"Utilities/Email Validator",argTypes:{emailType:{control:{type:"select"},options:["valid","validWithSubdomain","invalidNoDomain","invalidNoUsername","invalidFormat","empty","custom"],defaultValue:"valid",description:"Type of email to check"},customEmail:{control:"text",defaultValue:"",description:"Custom email to validate"}}},n=({emailType:o,customEmail:d})=>{let e;switch(o){case"valid":e="user@example.com";break;case"validWithSubdomain":e="user.name@sub.example.co";break;case"invalidNoDomain":e="user@domain";break;case"invalidNoUsername":e="@domain.com";break;case"invalidFormat":e="user@.com";break;case"empty":e="";break;case"custom":e=d;break;default:e=d}const W=C(e);return{template:`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    `,data(){return{testEmail:e,result:W}}}},a=n.bind({});a.args={emailType:"valid"};const i=n.bind({});i.args={emailType:"validWithSubdomain"};const t=n.bind({});t.args={emailType:"invalidNoDomain"};const s=n.bind({});s.args={emailType:"invalidNoUsername"};const l=n.bind({});l.args={emailType:"invalidFormat"};const r=n.bind({});r.args={emailType:"empty"};const m=n.bind({});m.args={emailType:"custom",customEmail:"enter.email.here@example.com"};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,E,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(v=(E=i.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var h,y,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,x,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var V,w,T;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,S,N;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var I,U,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`({
  emailType,
  customEmail
}) => {
  let testEmail;

  // Set test email based on selected type
  switch (emailType) {
    case 'valid':
      testEmail = 'user@example.com';
      break;
    case 'validWithSubdomain':
      testEmail = 'user.name@sub.example.co';
      break;
    case 'invalidNoDomain':
      testEmail = 'user@domain';
      break;
    case 'invalidNoUsername':
      testEmail = '@domain.com';
      break;
    case 'invalidFormat':
      testEmail = 'user@.com';
      break;
    case 'empty':
      testEmail = '';
      break;
    case 'custom':
      testEmail = customEmail;
      break;
    default:
      testEmail = customEmail;
  }
  const result = isValidEmail(testEmail);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Email Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Email</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ testEmail || "(empty string)" }}</pre>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidEmail(email) = <strong>{{ result }}</strong>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h3>About Email Validation</h3>
          <p>This utility validates emails using a regex pattern that checks for:</p>
          <ul>
            <li>Valid username part (before @) - can include letters, numbers, dots, hyphens</li>
            <li>@ symbol</li>
            <li>Domain name - can include letters, numbers, dots, hyphens</li>
            <li>Domain extension (2-3 characters like .com, .co, etc.)</li>
          </ul>
        </div>
      </div>
    \`,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
}`,...(F=(U=m.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const A=["ValidEmail","ValidWithSubdomain","InvalidNoDomain","InvalidNoUsername","InvalidFormat","EmptyString","CustomEmail"];export{m as CustomEmail,r as EmptyString,l as InvalidFormat,t as InvalidNoDomain,s as InvalidNoUsername,a as ValidEmail,i as ValidWithSubdomain,A as __namedExportsOrder,z as default};
