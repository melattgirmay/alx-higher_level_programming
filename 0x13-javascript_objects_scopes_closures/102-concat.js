#!/usr/bin/node
const fs = require('fs');

const src1Path = process.argv[2];
const src2Path = process.argv[3];
const destPath = process.argv[4];

const src1Content = fs.readFileSync(src1Path, 'utf8');
const src2Content = fs.readFileSync(src2Path, 'utf8');

const concatContent = src1Content + src2Content;

fs.writeFileSync(destPath, concatContent);

// Print the output to the console for verification
console.log(concatContent);

