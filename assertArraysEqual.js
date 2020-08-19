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

const assertArraysEquals = function (arr1, arr2) {
  if (eqArrays (arr1, arr2)=== true) {
    console.log(`⭕️${arr1} is equal to ${arr2}.`)
  } else {
    console.log(`❌${arr1} is not equal to ${arr2}.`)
  }
}

//console.log(assertArraysEquals([1,2],[1,3])); => not equal