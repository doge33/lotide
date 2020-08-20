const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🧐Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  }
};


const findKeyByValue = function (object, value) {
  //iterate through the keys of object
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// Alternatively, consider Object.keys()!

/* test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  documentary: "Filthy Rich",
  crime: "CSI"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "CSI"), "crime");
assertEqual(findKeyByValue(bestTVShowsByGenre, "House"), undefined);
*/