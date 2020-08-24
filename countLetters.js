const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🧐Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {

  let finalObject = {};
  //loop throught the string using for of
  for (let letter of sentence) {
    
    if (finalObject[letter]) {
      finalObject[letter] ++;
      //console.log(finalObject);
    } else if (letter !== " ") {
      finalObject[letter] = 1;
    }
  }
  console.log(finalObject);
  return finalObject;
};

module.exports = countLetters;
/*test codes
const sentence1Result = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

const sentence1 = "lighthouse in the house";
const sentence2 = "animal crossing";

assertEqual(countLetters(sentence1).l, 1);
assertEqual(countLetters(sentence1).h, 4);
//countLetters(sentence2);
*/
