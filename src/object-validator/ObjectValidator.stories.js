import { isPureObject } from './src/index';

export default {
  title: 'Utilities/Object Validator',
  argTypes: {
    valueType: {
      control: { type: 'select' },
      options: ['emptyObject', 'objectWithProperties', 'array', 'null', 'string', 'number', 'boolean', 'date'],
      defaultValue: 'emptyObject',
      description: 'Type of value to check'
    },
    customValue: {
      control: 'text',
      defaultValue: '{}',
      description: 'Custom JSON value to check (will be parsed if valid)'
    }
  },
};

const Template = ({ valueType, customValue }) => {
  let testValue;
  let displayValue;
  
  // Set test value based on selected type
  switch (valueType) {
    case 'emptyObject':
      testValue = {};
      displayValue = '{}';
      break;
    case 'objectWithProperties':
      testValue = { name: 'John', age: 30 };
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
      displayValue = `"${testValue}"`;
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
        displayValue = `"${customValue}"`;
      }
  }

  const result = isPureObject(testValue);
  const valueTypeOf = typeof testValue;
  const valueIsArray = Array.isArray(testValue);
  
  return {
    template: `
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
    `,
    data() {
      return {
        displayValue,
        result,
        valueTypeOf,
        valueIsArray
      };
    }
  };
};

export const EmptyObject = Template.bind({});
EmptyObject.args = {
  valueType: 'emptyObject'
};

export const ObjectWithProperties = Template.bind({});
ObjectWithProperties.args = {
  valueType: 'objectWithProperties'
};

export const ArrayValue = Template.bind({});
ArrayValue.args = {
  valueType: 'array'
};

export const NullValue = Template.bind({});
NullValue.args = {
  valueType: 'null'
};

export const StringValue = Template.bind({});
StringValue.args = {
  valueType: 'string'
};

export const NumberValue = Template.bind({});
NumberValue.args = {
  valueType: 'number'
};

export const BooleanValue = Template.bind({});
BooleanValue.args = {
  valueType: 'boolean'
};

export const DateObject = Template.bind({});
DateObject.args = {
  valueType: 'date'
};

export const CustomValue = Template.bind({});
CustomValue.args = {
  valueType: 'custom',
  customValue: '{"id": 1, "status": "active"}'
};