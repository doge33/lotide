//task: return middle array.
//if odd number length, return array of middle most element
//if even number length, return array of middle two element

const middle = function(array) {
  let result = [];
  let i = Math.floor(array.length / 2);
  if (array.length % 2 !== 0 && array.length !== 1) {
    result.push(array[i]);
  } else if (array.length % 2 === 0 && array.length !== 2) {
    result.push(array[i - 1], array[i]);
  }
  return result;
};

module.exports = middle;