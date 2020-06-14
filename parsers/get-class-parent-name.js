const fs = require('fs');
const readline = require('readline');

const getClassParentName = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let parentName;

  for await (const line of rl) {
    const classNameRegEx = /^.*(?!.*Dto)(?:class\s)(.*)(?=\sextends)/gm;
    const name = classNameRegEx.exec(line);

    if (name) {
      const parentRegEx = new RegExp(`(?:class\\s${name[1]}\\sextends\\s)(.*)(?= {)`, 'gm');
      const match = parentRegEx.exec(line);
      if (match) {
        parentName = match[1];
      }

      break;
    }
  }

  return parentName;
};

module.exports = getClassParentName;