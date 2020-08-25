const countLetters = function(sentence) {

  let finalObject = {};
  //loop throught the string using for of
  for (let letter of sentence) {
    
    if (finalObject[letter]) {
      finalObject[letter] ++;
    } else if (letter !== " ") {
      finalObject[letter] = 1;
    }
  }
  return finalObject;
};

module.exports = countLetters;

