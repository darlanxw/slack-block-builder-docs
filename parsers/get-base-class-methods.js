const fs = require('fs');

const getClassName = require('./get-class-name');
const getClassParentName = require('./get-class-parent-name');
const getClassMethods = require('./get-class-methods');

const getBaseClassMethods = async (path) => {
  const classes = {};
  const files = fs.readdirSync(path)
      .filter((file) => (file !== 'index.js'));
  for await (const file of files) {
    const fullPath = `${path}/${file}`;
    const className = await getClassName(fullPath);
    const methods = await getClassMethods(fullPath);

    classes[className] = {
      fullPath,
      methods,
    };
  }

  for await (const file of files) {
    const fullPath = `${path}/${file}`;
    const className = await getClassName(fullPath);
    const parent = await getClassParentName(fullPath);

    classes[className].parent = classes[parent] ? parent : null;
  }

  const consolidatedMethods = {};

  const getMethodsRecursively = (name) => {
    const methods = classes[name].methods;

    if (classes[name].parent) {
      methods.push(...getMethodsRecursively(classes[name].parent));
    }

    return methods;
  };

  Object.keys(classes).forEach((name) => {
    consolidatedMethods[name] = [...new Set(getMethodsRecursively(name))];
  });

  return consolidatedMethods;
};

module.exports = getBaseClassMethods;