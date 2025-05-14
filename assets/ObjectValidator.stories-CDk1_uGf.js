const q=t=>typeof t=="object"&&t!==null&&!Array.isArray(t),G={title:"Utilities/Object Validator",argTypes:{valueType:{control:{type:"select"},options:["emptyObject","objectWithProperties","array","null","string","number","boolean","date"],defaultValue:"emptyObject",description:"Type of value to check"},customValue:{control:"text",defaultValue:"{}",description:"Custom JSON value to check (will be parsed if valid)"}}},a=({valueType:t,customValue:V})=>{let e,n;switch(t){case"emptyObject":e={},n="{}";break;case"objectWithProperties":e={name:"John",age:30},n=JSON.stringify(e,null,2);break;case"array":e=[1,2,3],n=JSON.stringify(e);break;case"null":e=null,n="null";break;case"string":e="Hello world",n=`"${e}"`;break;case"number":e=42,n=e.toString();break;case"boolean":e=!0,n=e.toString();break;case"date":e=new Date,n=e.toString();break;default:try{e=JSON.parse(V),n=JSON.stringify(e,null,2)}catch{e=V,n=`"${V}"`}}const _=q(e),B=typeof e,U=Array.isArray(e);return{template:`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    `,data(){return{displayValue:n,result:_,valueTypeOf:B,valueIsArray:U}}}},l=a.bind({});l.args={valueType:"emptyObject"};const s=a.bind({});s.args={valueType:"objectWithProperties"};const r=a.bind({});r.args={valueType:"array"};const u=a.bind({});u.args={valueType:"null"};const i=a.bind({});i.args={valueType:"string"};const o=a.bind({});o.args={valueType:"number"};const d=a.bind({});d.args={valueType:"boolean"};const p=a.bind({});p.args={valueType:"date"};const y=a.bind({});y.args={valueType:"custom",customValue:'{"id": 1, "status": "active"}'};var c,b,v;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,f,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var O,k,h;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var x,S,T;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,A,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var I,J,N;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(N=(J=o.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var P,$,W;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(W=($=d.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var C,D,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var H,R,E;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'array':
      testValue = [1, 2, 3];
      displayValue = JSON.stringify(testValue);
      break;
    case 'null':
      testValue = null;
      displayValue = 'null';
      break;
    case 'string':
      testValue = 'Hello world';
      displayValue = \`"\${testValue}"\`;
      break;
    case 'number':
      testValue = 42;
      displayValue = testValue.toString();
      break;
    case 'boolean':
      testValue = true;
      displayValue = testValue.toString();
      break;
    case 'date':
      testValue = new Date();
      displayValue = testValue.toString();
      break;
    default:
      try {
        testValue = JSON.parse(customValue);
        displayValue = JSON.stringify(testValue, null, 2);
      } catch (error) {
        testValue = customValue;
        displayValue = \`"\${customValue}"\`;
      }
  }
  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div v-if="valueTypeOf === 'object' && valueIsArray">
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isPureObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    \`,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const K=["EmptyObject","ObjectWithProperties","ArrayValue","NullValue","StringValue","NumberValue","BooleanValue","DateObject","CustomValue"];export{r as ArrayValue,d as BooleanValue,y as CustomValue,p as DateObject,l as EmptyObject,u as NullValue,o as NumberValue,s as ObjectWithProperties,i as StringValue,K as __namedExportsOrder,G as default};
