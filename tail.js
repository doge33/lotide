const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🧐Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

/*
Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];

console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


//compare each element of the array directly, because JS can't compare arrays directly
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


//test case 3
const oneElement =  [];
console.log(tail(oneElement));
*/