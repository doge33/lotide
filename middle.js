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

//task: return middle array.
//if odd number length, return array of middle most element
//if even number length, return array of middle two element

const middle = function(array) {
  let result = [];
  let i = Math.floor(array.length / 2);
  if (array.length % 2 !== 0 && array.length !== 1) {
    result.push(array[i]);
  } else if (array.length % 2 === 0 && array.length !== 2) {
    result.push(array[i - 1], array[i]);
  }
  return result;
};

//test code
console.log(middle([1,3,5,7,9])); // => i=2, return [5]
console.log(middle([1,3,5,6,9,11])); // => i=3, return [5,6]
//console.log(middle([1])); // => i=0, return []
//console.log(middle([1,3])); // => i = 1, return []
//console.log(middle([]));

//assertArraysEqual(middle([1,3,5,6,9,11]), [5,6]);
//assertArraysEqual(middle([1,3,5,7,9]), [5]);
//assertArraysEqual(middle([1]), []); // => i=0, return []
//assertArraysEqual(middle([1,3]),[]); // => i = 1, return []
//assertArraysEqual(middle([]), undefined);