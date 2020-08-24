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

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    //!callback(item) ? newArray.push(item) : break;
    if(!callback(item)){
      newArray.push(item)
    } else {
      break;
    }
  }
  return newArray;
};

module.exports = takeUntil;

  /* this is the forEach, but doesnt make it better or shorter in this case.
  array.forEach(item => {
    if(!callback(item)){
      newArray.push(item)
    } else {
      break;
    }
    return newArray;
  })
  
  */

 

//The function will return a "slice of the array with elements taken from the beginning."
//until the callback returns a truthy value.

/*test codes
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
*/
