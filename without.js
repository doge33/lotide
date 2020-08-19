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
/*
const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < itemsToRemove.length; i++) {

    for (let j = 0; j < newArray.length; j++) {
      if ()
      }
    }
  }
  return newArray;
}*/

/*
const without = function(source, itemsToRemove) {
  let newArray = [...source];
  for(let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if(itemsToRemove[i] === newArray[j]) {
        newArray.splice(j, j+1);
        console.log(newArray);
      } 
      console.log(newArray);
      }
      console.log(newArray);
    }
    console.log(newArray);
    return newArray;
  }
   //return newArray; 
  //return result.length ? result : source
*/


const without = function(source, itemsToRemove) {
  let newArray = [...source];
  for(v of source) {
    itemsToRemove.find(x => x === v)? newArray.splice(newArray.indexOf(v),1):""
  }
  return newArray;
};




//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], ["3", 1, 2]))// => ["1", "2"]
console.log(without([5,6,7,8], [,5,7])) // => [6,8]


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
console.log(words)
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);