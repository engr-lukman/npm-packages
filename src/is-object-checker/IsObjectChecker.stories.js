import { isPureObject } from './src/index';

export default {
  title: 'Utilities/IsObjectChecker',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A utility function that checks if a value is a pure JavaScript object (not null, not array, etc).'
      }
    }
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Value to check if it is a pure object'
    },
    showAllExamples: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show all example test cases'
    },
    refreshCount: {
      control: { type: 'number' },
      defaultValue: 0,
      description: 'Change this value to refresh the component'
    }
  },
};

/**
 * Template for IsObjectChecker examples
 */
const Template = ({ value, showAllExamples, refreshCount }) => {
  const examples = [
    { value: {}, description: 'Empty object', result: isPureObject({}) },
    { value: { name: 'John' }, description: 'Object with properties', result: isPureObject({ name: 'John' }) },
    { value: null, description: 'null', result: isPureObject(null) },
    { value: [], description: 'Empty array', result: isPureObject([]) },
    { value: 123, description: 'Number', result: isPureObject(123) },
    { value: 'string', description: 'String', result: isPureObject('string') },
    { value: new Date(), description: 'Date object', result: isPureObject(new Date()) },
    { value: () => {}, description: 'Function', result: isPureObject(() => {}) },
  ];
  
  // Test the provided value
  const currentResult = isPureObject(value);
  
  const container = document.createElement('div');
  container.className = 'examples-container';
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.maxWidth = '600px';
  
  const header = document.createElement('h2');
  header.textContent = 'isPureObject Utility Function';
  container.appendChild(header);
  
  const description = document.createElement('p');
  description.textContent = 'This utility checks if a value is a pure object (not null and not an array).';
  container.appendChild(description);

  // Current test result section
  const currentSection = document.createElement('div');
  currentSection.style.marginBottom = '20px';
  currentSection.style.padding = '15px';
  currentSection.style.backgroundColor = '#f8f8f8';
  currentSection.style.borderRadius = '4px';
  currentSection.style.border = '1px solid #ddd';

  const currentHeader = document.createElement('h3');
  currentHeader.textContent = 'Current Test';
  currentSection.appendChild(currentHeader);

  const resultText = document.createElement('p');
  resultText.innerHTML = `<strong>Value:</strong> ${JSON.stringify(value)} | <strong>Type:</strong> ${Object.prototype.toString.call(value)} | <strong>Result:</strong> <span style="color: ${currentResult ? 'green' : 'red'}; font-weight: bold;">${currentResult.toString()}</span>`;
  currentSection.appendChild(resultText);

  container.appendChild(currentSection);

  // Only show all examples if requested
  if (showAllExamples) {
    const exampleHeader = document.createElement('h3');
    exampleHeader.textContent = 'All Test Cases';
    container.appendChild(exampleHeader);
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    
    const thead = document.createElement('thead');
    thead.style.backgroundColor = '#f3f3f3';
    
    const headerRow = document.createElement('tr');
    ['Value Type', 'Description', 'isObject Result'].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      th.style.padding = '8px';
      th.style.border = '1px solid #ddd';
      th.style.textAlign = 'left';
      headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    
    examples.forEach(example => {
      const row = document.createElement('tr');
      
      const typeCell = document.createElement('td');
      typeCell.textContent = Object.prototype.toString.call(example.value);
      typeCell.style.padding = '8px';
      typeCell.style.border = '1px solid #ddd';
      row.appendChild(typeCell);
      
      const descCell = document.createElement('td');
      descCell.textContent = example.description;
      descCell.style.padding = '8px';
      descCell.style.border = '1px solid #ddd';
      row.appendChild(descCell);
      
      const resultCell = document.createElement('td');
      resultCell.textContent = example.result.toString();
      resultCell.style.padding = '8px';
      resultCell.style.border = '1px solid #ddd';
      resultCell.style.color = example.result ? 'green' : 'red';
      resultCell.style.fontWeight = 'bold';
      row.appendChild(resultCell);
      
      tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.appendChild(table);
  }
  
  const codeHeader = document.createElement('h3');
  codeHeader.textContent = 'Usage Example:';
  codeHeader.style.marginTop = '20px';
  container.appendChild(codeHeader);
  
  const codeBlock = document.createElement('pre');
  codeBlock.style.backgroundColor = '#f5f5f5';
  codeBlock.style.padding = '12px';
  codeBlock.style.borderRadius = '4px';
  codeBlock.style.overflow = 'auto';
  
  codeBlock.textContent = `import isPureObject from '@engr-lukman/is-object-checker';

// Check if value is a pure object
if (isPureObject(myValue)) {
  console.log('This is a pure object');
} else {
  console.log('Not a pure object');
}`;
  
  container.appendChild(codeBlock);
  
  return container;
};

/**
 * Basic usage example for the isPureObject utility
 */
export const Basic = Template.bind({});
Basic.args = {
  value: { name: 'John', age: 30 },
  showAllExamples: true,
  refreshCount: 0
};
Basic.parameters = {
  docs: {
    description: {
      story: 'Demonstrates the basic usage of the isPureObject function with a standard object.'
    }
  }
};

/**
 * Example with a non-object value (array)
 */
export const WithArray = Template.bind({});
WithArray.args = {
  value: ['item1', 'item2', 'item3'],
  showAllExamples: true,
  refreshCount: 0
};
WithArray.parameters = {
  docs: {
    description: {
      story: 'Shows how isPureObject correctly identifies arrays as not pure objects.'
    }
  }
};

/**
 * Example with a non-object value (null)
 */
export const WithNull = Template.bind({});
WithNull.args = {
  value: null,
  showAllExamples: true,
  refreshCount: 0
};
WithNull.parameters = {
  docs: {
    description: {
      story: 'Shows how isPureObject correctly identifies null values as not pure objects.'
    }
  }
};

/**
 * Example with a complex object
 */
export const WithComplexObject = Template.bind({});
WithComplexObject.args = {
  value: {
    id: 1,
    user: {
      firstName: 'John',
      lastName: 'Doe',
      roles: ['admin', 'editor']
    },
    createdAt: new Date(),
    active: true
  },
  showAllExamples: false,
  refreshCount: 0
};
WithComplexObject.parameters = {
  docs: {
    description: {
      story: 'Shows the function working with a more complex nested object structure.'
    }
  }
};