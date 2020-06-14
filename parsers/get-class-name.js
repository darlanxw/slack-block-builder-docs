const fs = require('fs');
const readline = require('readline');

const getClassName = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let className;

  for await (const line of rl) {
    const classNameRegEx = /^.*(?!.*Dto)(?:class\s)(.*)(?=\sextends)/gm;
    const name = classNameRegEx.exec(line);
    if (name) {

      className = name[1];

      break;
    }
  }

  return className;
};

module.exports = getClassName;