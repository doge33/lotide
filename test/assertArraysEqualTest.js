const assertArraysEqual = require("../assertArraysEqual");


assertArraysEqual([1,2],[1,3]); //=> not equal
assertArraysEqual([0,10,123], [0, 10, 123]); // => equal