const fs = require('fs');
const readline = require('readline');

const getClassParams = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const params = [];

  for await (const line of rl) {
    const paramsRegEx = /^.*(?:this\.props\.)(.*)(?=\s= params)/g;
    const match = paramsRegEx.exec(line);

    if (match) {
      params.push(match[1]);
    }
  }

  return params;
};

module.exports = getClassParams;