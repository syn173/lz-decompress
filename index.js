const lzString = require('lz-string');
const queryString = require('query-string');

if (process.argv.length < 3) {
  console.error('Usage: lz-string-decompress ');
  process.exit(1);
}

const str = process.argv[2];

const oriStr = lzString.decompressFromEncodedURIComponent(str);
console.log(queryString.parse(oriStr));