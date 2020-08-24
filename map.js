const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2 [i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`⭕️${arr1} is equal to ${arr2}.`);
  } else {
    console.log(`❌${arr1} is not equal to ${arr2}.`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
*/

