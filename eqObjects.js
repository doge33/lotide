const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🧐Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);
  if (keyArr1.length === keyArr2.length) {
    for (let key of keyArr1) {
      //if type of value is array, call in the eqArrays function
      if (typeof object1[key] === "object" && typeof object2[key] === "object"){
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

  /*
       test cases for objects(arrays)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const cd3 = {c: 1, d: ["2" ,3]}
assertEqual(eqObjects(cd, cd3), false); // =>false


// test cases for primitive types
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ab1 = { a: "1", b: "4" }
assertEqual(eqObjects(ab, ba), true); // => true

assertEqual(eqObjects(ab1, ab), false);

const abc = { a: "1", b: "2", c: "3" };
const cba = { c:"3",  b:"2"};
assertEqual(eqObjects(ab, abc),false); // => false
assertEqual(eqObjects(abc, cba), false); // 

*/