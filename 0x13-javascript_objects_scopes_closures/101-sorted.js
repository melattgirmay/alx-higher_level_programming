#!/usr/bin/node

const { dict } = require('./101-data');
const result = {};
for (const userId in dict) {
	const occurrence = dict[userId];
	if (result[occurrence]) {
		result[occurrence].push(userId);
	}
	else {
		result[occurrence] = [userId];
	}
}
console.log(result);
