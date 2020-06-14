const fs = require('fs');
const readline = require('readline');

const getClassMethods = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const methods = [];

  for await (const line of rl) {
    const methodRegEx = /^(?!.*this|.*constructor|.*build\()(?=.)(?:\s*)(.*)(?:\(.*\))(?= {)/gm;
    const match = methodRegEx.exec(line);

    if (match) {
      methods.push(match[1]);
    }
  }

  return methods;
};

module.exports = getClassMethods;