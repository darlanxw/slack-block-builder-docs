const classReference = `# {{displayName}}

Created by using the \`{{className}}\` object.

?> **Note:** This document is a reference to the \`{{className}}\` object in **Block Builder**. For information on the business logic for the **{{displayName}}** in the context of the Slack Block Kit framework, visit [the {{displayName}} docs]({{link}}) on Slack's doc site.

### Importing

{{{importSection}}}

### Constructor

The \`{{className}}\` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

\`\`\`javascript
{{className}}(params?)
\`\`\`

#### Params

{{{paramsSection}}}

#### Returns

A new \`{{className}}\` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return \`this\`, the instance of \`{{className}}\` on which the method is called.

{{{builderMethodsSection}}}

### Other Methods

The \`{{className}}\` object also has other methods available:

{{{otherMethodsSection}}}
`

module.exports = classReference;