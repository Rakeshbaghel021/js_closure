// Challenge 1
function addTwo(num) {
	return num+2;
}

console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
	return word+"s";
}

console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
	let  newArray =[];
	for (i=0; i< array.length; i++) {
		newArray.push(callback(array[i]));
	}
	return newArray;
}

console.log(map([1, 2, 3], addTwo)); //(3) [3, 4, 5]

// Challenge 4
function forEach(array, callback) {
	for(i=0; i<array.length; i++) {
		callback(array[i]);
	}
}

console.log(forEach([1,2,3],function(e) {
	console.log(e);
})); 
	                                   


// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
}

//Extension 2
function reduce(array, callback, initialValue) {}

//Extension 3
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
