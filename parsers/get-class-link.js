const fs = require('fs');
const readline = require('readline');

const getClassLink = async (path) => {
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let link;

  for await (const line of rl) {
    const linkRegEx = /^.*(?:\* {@link )(.*)(?=\|)/gm;
    const name = linkRegEx.exec(line);
    if (name) {

      link = name[1];

      break;
    }
  }

  return link;
};

module.exports = getClassLink;