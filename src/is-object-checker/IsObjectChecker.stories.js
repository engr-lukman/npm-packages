import { isPureObject } from './src/index';

export default {
  title: 'Utilities/IsObjectChecker',
  parameters: {
    layout: 'centered',
  },
};

/**
 * Example story showing the usage of the isPureObject utility function
 */
export const Basic = {
  render: () => {
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

    const container = document.createElement('div');
    container.className = 'examples-container';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.maxWidth = '600px';
    
    const header = document.createElement('h2');
    header.textContent = 'isPureObject Utility Function Examples';
    container.appendChild(header);
    
    const description = document.createElement('p');
    description.textContent = 'This utility checks if a value is a pure object (not null and not an array).';
    container.appendChild(description);
    
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
  },
};