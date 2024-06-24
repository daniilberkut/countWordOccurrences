'use strict';

function countWordOccurrences(text) {
	let map = new Map();
	let textArr = text
		.replace(/[^a-zA-Z0-9\s]/g, '')
		.toLowerCase()
		.split(/\s+/);
	textArr.forEach((wordA) => {
		let count = 0;
		textArr.forEach((wordB) => {
			if (wordA === wordB) {
				return (count += 1);
			}
		});
		map.set(wordA, count);
	});
	return map;
}

console.log(countWordOccurrences('hello world, hello again'));
console.log(countWordOccurrences('JavaScript is awesome, JavaScript is fun!'));
