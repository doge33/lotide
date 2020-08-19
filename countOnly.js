const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    //console.log(`🧐Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    //if the current item (from allItems) indeed exists as a property of itemsToCount
    if (itemsToCount[item]) {
    //if item already exists in result(like counted before)
      if (results[item]) {
        results[item]++;
      } else {
        //if the item doesnt exist yet as a key in the object(i.e counted for the first time)
        results[item] = 1; //count it as 1 to start
      }
    }
  }
  return results;
};
  

/*test codes
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(result1);

//assertEqual(result1["Jason"], 1);
//assertEqual(result1["Karima"], undefined);
//assertEqual(result1["Joe"], 1);
//assertEqual(result1["Fang"], 2);
*/