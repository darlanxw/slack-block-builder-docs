const topLevel = `The \`{{name}}\` object is a top-level import:

\`\`\`javascript
import { {{name}} } from 'slack-block-builder';
\`\`\`
`

const lowerLevel = `The \`{{name}}\` object is accessed through the \`{{category}}\` object:

\`\`\`javascript
import { {{category}} } from 'slack-block-builder';

// An instance of {{name}} can then be created by calling {{category}}.{{name}}();
\`\`\`
`

module.exports = {
  topLevel,
  lowerLevel,
};



