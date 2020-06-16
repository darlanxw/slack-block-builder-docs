const classReference = `# {{displayName}}

?> **Note:** This document is a reference to the \`{{className}}\` object in **Block Builder**. For information on the business logic for the **{{displayName}}** in the context of the Slack Block Kit framework, visit [the {{displayName}} docs]({{link}}) on Slack's doc site.

### Creating an Instance 

{{{importSection}}}

The \`{{className}}\` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

\`\`\`javascript
{{className}}(params?)
\`\`\`

#### Params

{{{paramsSection}}}

#### Returns

A new \`{{className}}\` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return \`this\`, the instance of \`{{className}}\` on which it is called.

{{{setterMethodsSection}}}

### Other Methods

The \`{{className}}\` object also has other methods available:

{{{otherMethodsSection}}}
`

module.exports = classReference;