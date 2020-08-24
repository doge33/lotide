const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


//test code
assertArraysEqual(middle([1,3,5,6,9,11]), [5,6]);
assertArraysEqual(middle([1,3,5,7,9]), [5]);
assertArraysEqual(middle([1]), []); // => i=0, return []
assertArraysEqual(middle([1,3]),[]); // => i = 1, return []
//assertArraysEqual(middle([]), undefined); =>error