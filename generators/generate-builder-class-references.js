const fs = require('fs');
const { render } = require('mustache');
const getClassData = require('../parsers/get-class-data');
const getImportSection = require('../helpers/get-import-section');
const getParamsSection = require('../helpers/get-params-section');
const getSetterMethodsSection = require('../helpers/get-setter-methods-section');
const getOtherMethodsSection = require('../helpers/get-other-methods-section');
const template = require('../templates/class-reference');

const generateBuilderClassReferences = async () => {
  const classData = await getClassData();

  Object.keys(classData).forEach((key) => {
    const classConfig = classData[key];
    const config = {
      displayName: classConfig.displayName,
      className: classConfig.name,
      link: classConfig.link,
      importSection: getImportSection(classConfig),
      paramsSection: getParamsSection(classConfig),
      setterMethodsSection: getSetterMethodsSection(classConfig),
      otherMethodsSection: getOtherMethodsSection(classConfig),
    };

    fs.writeFileSync(`../docs${classConfig.directory}/${classConfig.writeTo}`, render(template, config));
  });
};

module.exports = generateBuilderClassReferences;
generateBuilderClassReferences();