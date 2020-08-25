// Returns true if both objects have identical keys with identical values.
const eqArrays = require("./eqArrays"); //why can't I import from index.js??
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

module.exports = eqObjects;
