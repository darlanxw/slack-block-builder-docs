const displayNames = require('../dictionary/display-names');

const getDisplayName = (file) => {
  return displayNames[file];
};

module.exports = getDisplayName;