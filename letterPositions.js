const letterPositions = function(sentence) {
  const results = {};
  // loop through the sentnece string
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }  
  }
  return results;
};

module.exports = letterPositions;