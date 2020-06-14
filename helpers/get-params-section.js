const args = require('../dictionary/method-and-prop-args');

const getParamsSection = (classConfig) => {
  return classConfig.params
    .map((param) => {
      const arg = args[`${param}${classConfig.name}`] || args[param];

      return `\`${param}\` – *${arg.charAt(0).toUpperCase()}${arg.slice(1)}*`;
    })
    .join('\n\n');
};

module.exports = getParamsSection;