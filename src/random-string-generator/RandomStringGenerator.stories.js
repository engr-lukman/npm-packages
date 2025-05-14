import { generateRandomString, generateRandomStringWithCharset } from './src/index';

export default {
  title: 'Utilities/Random String Generator',
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 100 },
      defaultValue: 32,
      description: 'The length of the random string to generate'
    },
    charset: {
      control: 'text',
      defaultValue: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      description: 'Character set to use for custom string generation'
    },
    useTimestampPrefix: {
      control: 'boolean',
      defaultValue: false,
      description: 'Whether to use a timestamp prefix for uniqueness'
    },
    refreshCount: {
      control: { type: 'number' },
      defaultValue: 0,
      description: 'Change this value to regenerate the strings'
    }
  },
};

const Template = ({ length, useTimestampPrefix, refreshCount }) => {
  const randomString = generateRandomString(length, { useTimestampPrefix });
  return {
    template: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p>Using timestamp prefix: {{ useTimestampPrefix ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    `,
    data() {
      return {
        randomString,
        length,
        useTimestampPrefix
      };
    }
  };
};

const CustomTemplate = ({ length, charset, refreshCount }) => {
  const randomString = generateRandomStringWithCharset(length, charset);
  return {
    template: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Random String Generator with Custom Charset</h2>
        <div style="margin-bottom: 20px;">
          <h3>Generated String (Length: {{ length }})</h3>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 4px; overflow-wrap: break-word;">{{ randomString }}</pre>
          <p><strong>Using character set:</strong> <code>{{ charset }}</code></p>
        </div>
      </div>
    `,
    data() {
      return {
        randomString,
        length,
        charset
      };
    }
  };
};

export const DefaultRandomString = Template.bind({});
DefaultRandomString.args = {
  length: 32,
  useTimestampPrefix: false,
  refreshCount: 0
};

export const UniqueRandomString = Template.bind({});
UniqueRandomString.args = {
  length: 32,
  useTimestampPrefix: true,
  refreshCount: 0
};

export const ShortRandomString = Template.bind({});
ShortRandomString.args = {
  length: 8,
  useTimestampPrefix: false,
  refreshCount: 0
};

export const CustomCharsetString = CustomTemplate.bind({});
CustomCharsetString.args = {
  length: 16,
  charset: '0123456789ABCDEF',
  refreshCount: 0
};

export const NumbersOnlyString = CustomTemplate.bind({});
NumbersOnlyString.args = {
  length: 10,
  charset: '0123456789',
  refreshCount: 0
};