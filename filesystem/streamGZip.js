const fs = require('fs');
const zlib = require('zlib');

// let readable = fs.createReadStream('./bigfile.txt');
// let compress = fs.createWriteStream('./bigfile.gz');

// let gzip = zlib.createGzip();

// readable.pipe(gzip).pipe(compress);

let readable = fs.createReadStream('./bigfile.gz');
let unZip = zlib.createUnzip();
let decompress = fs.createWriteStream('./bigfile2.txt');

readable.pipe(unZip).pipe(decompress);