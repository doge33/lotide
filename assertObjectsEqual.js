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

const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);
  if (keyArr1.length === keyArr2.length) {
    for (let key of keyArr1) {
      //if type of value is array, call in the eqArrays function
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (eqArrays(object1[key],object2[key]) === false) {
          return false;
        } 
    } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
const assertObjectsEqual = function(object1, object2) {
  eqObjects(object1, object2)
  const inspect = require('util').inspect; // <= add this line
  //console.log(`Example label: ${inspect(actual)}`);
  if(eqObjects(object1, object2)){
    console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`)
  }
};



const object1 = {a:1, b:2, c:3}
const object2 = {a:1, c:3, b:2}
const o3 = {d:"1", e:[7,8,9], f:[9,8,7]}
const o4 = {d:"1", e:[9,8,7], f:[7,8,9]}
assertObjectsEqual(object1, object2);
//assertObjectsEqual(eqObjects(o3,o4), false);
//assertObjectsEqual(eqObjects(o3,object1), true);
//assertObjectsEqual(eqObjects(object2,o4), false);