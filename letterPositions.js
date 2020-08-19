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

const letterPositions = function(sentence) {
  const results = {};
  // loop through the sentnece string
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      //if the letter already exists, push
      results[letter].push(i);
    } else {
      //if its the first time the letter appears, attach the letter as a key
      //initialize its value as an array containing the first index value i
      results[letter] = [i];
    }
  }
  return results;
};


/* test code
const sentence1 = "lighthouse in the house"

console.log(letterPositions(sentence1));
const compare = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

assertArraysEqual(letterPositions(sentence1).i, compare.i);
*/