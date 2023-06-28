#!/usr/bin/node

const fs = require('fs');
const [sourceFile1, sourceFile2, destinationFile] = process.argv.slice(2);

// Read the contents of the first source file
const content1 = fs.readFileSync(sourceFile1, 'utf8');

// Read the contents of the second source file
const content2 = fs.readFileSync(sourceFile2, 'utf8');

// Concatenate the contents of both files
const concatenatedContent = content1 + '\n' + content2;

// Write the concatenated content to the destination file
fs.writeFileSync(destinationFile, concatenatedContent);

console.log(`Concatenation successful. Result written to ${destinationFile}.`);

