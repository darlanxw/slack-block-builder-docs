const { render } = require('mustache');
const importDoc = require('../partials/import-section');

const getImportSection = (classConfig) => {
  const config = {
    name: classConfig.name,
    category: classConfig.category,
  };

  return config.category === 'Surfaces' ? render(importDoc.topLevel, config) : render(importDoc.lowerLevel, config);
};

module.exports = getImportSection;