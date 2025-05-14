import isValidEmail from './src/index';

export default {
  title: 'Utilities/Email Validator',
  argTypes: {
    emailType: {
      control: { type: 'select' },
      options: [
        'valid', 
        'validWithSubdomain', 
        'invalidNoDomain', 
        'invalidNoUsername', 
        'invalidFormat', 
        'empty',
        'custom'
      ],
      defaultValue: 'valid',
      description: 'Type of email to check'
    },
    customEmail: {
      control: 'text',
      defaultValue: '',
      description: 'Custom email to validate'
    }
  },
};

const Template = ({ emailType, customEmail }) => {
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
    template: `
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
    `,
    data() {
      return {
        testEmail,
        result
      };
    }
  };
};

export const ValidEmail = Template.bind({});
ValidEmail.args = {
  emailType: 'valid'
};

export const ValidWithSubdomain = Template.bind({});
ValidWithSubdomain.args = {
  emailType: 'validWithSubdomain'
};

export const InvalidNoDomain = Template.bind({});
InvalidNoDomain.args = {
  emailType: 'invalidNoDomain'
};

export const InvalidNoUsername = Template.bind({});
InvalidNoUsername.args = {
  emailType: 'invalidNoUsername'
};

export const InvalidFormat = Template.bind({});
InvalidFormat.args = {
  emailType: 'invalidFormat'
};

export const EmptyString = Template.bind({});
EmptyString.args = {
  emailType: 'empty'
};

export const CustomEmail = Template.bind({});
CustomEmail.args = {
  emailType: 'custom',
  customEmail: 'enter.email.here@example.com'
};