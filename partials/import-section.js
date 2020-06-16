const topLevel = `The method to create an instance of \`{{name}}\` is a top-level import:

\`\`\`javascript
import { {{name}} } from 'slack-block-builder';

const myObj = {{name}}();
\`\`\`
`

const lowerLevel = `An instance of \`{{name}}\` is created through the \`{{category}}.{{name}}\` method:

\`\`\`javascript
import { {{category}} } from 'slack-block-builder';

const myObj = {{category}}.{{name}}();
\`\`\`
`

module.exports = {
  topLevel,
  lowerLevel,
};



