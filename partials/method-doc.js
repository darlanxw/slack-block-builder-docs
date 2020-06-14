const withArgs = `\`\`\`javascript
{{name}}.{{method}}({{arg}})
\`\`\`

{{description}}
`

const withoutArgs = `\`\`\`javascript
{{name}}.{{method}}()
\`\`\`

{{description}}
`

module.exports = {
  withArgs,
  withoutArgs,
};
