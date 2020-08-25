const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {

    if(!callback(item)){
      newArray.push(item)
    } else {
      break;
    }
    
  }
  return newArray;
};

module.exports = takeUntil;


