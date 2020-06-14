const fs = require('fs');

const getBaseClassMethods = require('./get-base-class-methods');
const getClassName = require('./get-class-name');
const getClassParentName = require('./get-class-parent-name');
const getClassParams = require('./get-class-params');
const getClassMethods = require('./get-class-methods');
const getClassLink = require('./get-class-link');
const getDisplayName = require('../helpers/get-display-name');


const getClassData = async () => {
  const basePath = '../node_modules/slack-block-builder/src';
  const categories = ['Surfaces', 'Blocks', 'Elements', 'Bits'];
  const categoryPaths = {};
  const data = {};

  categories.forEach((category) => {
    categoryPaths[category] = fs.readdirSync(`${basePath}/${category.toLowerCase()}`)
      .filter((file) => !Boolean(file === 'index.js' || file === 'base'));
  });

  for await (const category of categories) {
    const baseClassPath = `${basePath}/${category.toLowerCase()}/base`;
    const baseClassMethods = await getBaseClassMethods(baseClassPath);
    const list = categoryPaths[category];

    for await (const file of list) {
      const fullPath = `${basePath}/${category.toLowerCase()}/${file}`;
      const className = await getClassName(fullPath);
      const parent = await getClassParentName(fullPath);
      const params = await getClassParams(fullPath);
      const methods = await getClassMethods(fullPath);
      const link = await getClassLink(fullPath);
      const displayName = getDisplayName(file);

      data[className] = {
        category,
        file,
        link,
        displayName,
        name: className,
        writeTo: file.replace('.js', '.md'),
        directory: `/${category.toLowerCase()}`,
        params: params.sort(),
        methods: Boolean(parent && baseClassMethods[parent]) ? methods.concat(baseClassMethods[parent]).sort() : methods.sort(),
      };
    }
  }

  return data;
};

module.exports = getClassData;
