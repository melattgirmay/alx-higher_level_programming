#!/usr/bin/node

const { dict } = require('./101-data');

const result = {};

// Loop through the original dictionary
for (const userId in dict) {
  const occurrence = dict[userId];
  
  // Check if the occurrence exists as a key in the result dictionary
  if (result[occurrence]) {
    // If the occurrence exists, add the current userId to the list
    result[occurrence].push(userId);
  } else {
    // If the occurrence doesn't exist, create a new key and set the value as an array with the current userId
    result[occurrence] = [userId];
  }
}

console.log(result);
