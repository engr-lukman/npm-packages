const Y=l=>l!==null&&Array.isArray(l)&&l.every(t=>typeof t=="object"&&t!==null),ee={title:"Utilities/Array Object Validator",argTypes:{valueType:{control:{type:"select"},options:["emptyArray","arrayOfObjects","arrayOfMixed","arrayOfPrimitives","object","null","string","number","boolean","date"],defaultValue:"emptyArray",description:"Type of value to check"},customValue:{control:"text",defaultValue:"[]",description:"Custom JSON value to check (will be parsed if valid)"}}},a=({valueType:l,customValue:t})=>{let e,n;switch(l){case"emptyArray":e=[],n="[]";break;case"arrayOfObjects":e=[{id:1,name:"John"},{id:2,name:"Jane"}],n=JSON.stringify(e,null,2);break;case"arrayOfMixed":e=[{name:"John"},"string",42,null],n=JSON.stringify(e,null,2);break;case"arrayOfPrimitives":e=[1,2,3,"string",!0],n=JSON.stringify(e,null,2);break;case"object":e={name:"John",age:30},n=JSON.stringify(e,null,2);break;case"null":e=null,n="null";break;case"string":e="Hello world",n=`"${e}"`;break;case"number":e=42,n=e.toString();break;case"boolean":e=!0,n=e.toString();break;case"date":e=new Date,n=e.toString();break;default:try{e=JSON.parse(t),n=JSON.stringify(e,null,2)}catch{e=t,n=`"${t}"`}}const Q=Y(e),W=typeof e,X=Array.isArray(e);return{template:`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
          </div>
        </div>
      </div>
    `,data(){return{displayValue:n,result:Q,valueTypeOf:W,valueIsArray:X}}}},s=a.bind({});s.args={valueType:"emptyArray"};const r=a.bind({});r.args={valueType:"arrayOfObjects"};const u=a.bind({});u.args={valueType:"arrayOfMixed"};const i=a.bind({});i.args={valueType:"arrayOfPrimitives"};const o=a.bind({});o.args={valueType:"object"};const d=a.bind({});d.args={valueType:"null"};const y=a.bind({});y.args={valueType:"string"};const p=a.bind({});p.args={valueType:"number"};const V=a.bind({});V.args={valueType:"boolean"};const c=a.bind({});c.args={valueType:"date"};const b=a.bind({});b.args={valueType:"custom",customValue:'[{"id": 1, "status": "active"}, {"id": 2, "status": "inactive"}]'};var f,g,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var m,O,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(k=(O=r.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var h,A,S;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(S=(A=u.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var x,J,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(T=(J=i.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var N,j,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,$,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(P=($=d.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var M,C,D;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(D=(C=y.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var z,H,R;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(R=(H=p.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var E,_,B;V.parameters={...V.parameters,docs:{...(E=V.parameters)==null?void 0:E.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(B=(_=V.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var U,q,F;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(F=(q=c.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,K,L;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`({
  valueType,
  customValue
}) => {
  let testValue;
  let displayValue;

  // Set test value based on selected type
  switch (valueType) {
    case 'emptyArray':
      testValue = [];
      displayValue = '[]';
      break;
    case 'arrayOfObjects':
      testValue = [{
        id: 1,
        name: 'John'
      }, {
        id: 2,
        name: 'Jane'
      }];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfMixed':
      testValue = [{
        name: 'John'
      }, 'string', 42, null];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'arrayOfPrimitives':
      testValue = [1, 2, 3, 'string', true];
      displayValue = JSON.stringify(testValue, null, 2);
      break;
    case 'object':
      testValue = {
        name: 'John',
        age: 30
      };
      displayValue = JSON.stringify(testValue, null, 2);
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
  const result = isValidArrayOfObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  return {
    template: \`
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Array Object Validator</h2>
        
        <div style="margin-bottom: 20px;">
          <h3>Input Value</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ displayValue }}</pre>
          
          <div style="margin-top: 10px;">
            <strong>Type:</strong> {{ valueTypeOf }}
          </div>
          <div>
            <strong>Is Array:</strong> {{ valueIsArray }}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <h3>Result</h3>
          <div style="font-size: 18px; padding: 10px; border-radius: 4px;" :style="{ backgroundColor: result ? '#e6ffec' : '#ffebe9' }">
            isValidArrayOfObject(value) = <strong>{{ result }}</strong>
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
}`,...(L=(K=b.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const ne=["EmptyArray","ArrayOfObjects","ArrayOfMixed","ArrayOfPrimitives","PlainObject","NullValue","StringValue","NumberValue","BooleanValue","DateObject","CustomValue"];export{u as ArrayOfMixed,r as ArrayOfObjects,i as ArrayOfPrimitives,V as BooleanValue,b as CustomValue,c as DateObject,s as EmptyArray,d as NullValue,p as NumberValue,o as PlainObject,y as StringValue,ne as __namedExportsOrder,ee as default};
