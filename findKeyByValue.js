const findKeyByValue = function (object, value) {
  //iterate through the keys of object
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
