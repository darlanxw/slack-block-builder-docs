const { render } = require('mustache');
const descriptions = require('../dictionary/setter-method-descriptions');
const args = require('../dictionary/method-and-prop-args');
const methodDoc = require('../partials/method-doc');

const getSetterMethodsSection = (classConfig) => {
  const methodDocs = classConfig.methods.reduce((acc, method) => {
    const config = {
      method,
      name: classConfig.name,
      arg: args[method],
      description: descriptions[method],
    };

    if (config.description) {
      acc.push( config.arg ? render(methodDoc.withArgs, config) : render(methodDoc.withoutArgs, config));
    }

    return acc;
  }, []);

  return methodDocs.join('');
};

module.exports = getSetterMethodsSection;