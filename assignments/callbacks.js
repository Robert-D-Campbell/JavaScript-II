// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

// GIVEN THIS PROBLEM:

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
}

// SOLUTION:

function firstItem(arr, cb) {
  return cb(arr[0]);
}

// NOTES ON THE SOLUTION:

// firstItem is a higher order function.
// It expects a callback (referred to as `cb`) as its second argument.
// To test our solution, we can use the given `items` array and a variety of callbacks.
// Note how callbacks can be declared separately, or inlined.

// TEST 1 (inlined callback):

const test1 = firstItem(items, item => `I love my ${item}!`);
console.log(test1); // "I love my Pencil!"

// TEST 2 (declaring callback before hand):

function logExorbitantPrice(article) {
  return `this ${article} is worth a million dollars!`;
}

const test2 = firstItem(items, logExorbitantPrice);
console.log(test2); // "this Pencil is worth a million dollars!"

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, getLength => {
  console.log(getLength);
});
////////////////////////

function last(arr, cb2) {
  // last passes the last item of the array into the callback.
  cb2(arr.pop());
}
last(items, last => {
  console.log(last);
});

function sumNums(x, y, cb3) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb3(x + y);
}

sumNums(3, 7, sumNums => {
  console.log(sumNums);
});

function multiplyNums(x, y, cb4) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb4(x * y);
}
multiplyNums(3, 7, multiplyNums => {
  console.log(multiplyNums);
});

function contains(item, list, cb5) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) {
    return cb5(true);
  } else {
    return cb5(false);
  }
}
contains("Pencil", items, contains => {
  console.log(contains);
});

/* STRETCH PROBLEM */
let dupes = [
  "first",
  "last",
  "first",
  "second",
  "array",
  "last",
  "first",
  "function"
];

function removeDuplicates(array, cb6) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDupes = array.filter(function(item, index, arr) {
    return index === arr.indexOf(item);
  });
  return cb6(noDupes);
}
function logArray(arr) {
  console.log(arr);
}
removeDuplicates(dupes, logArray);
