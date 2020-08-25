const letterPositions = require("../index").letterPositions;
const assert = require("chai").assert;

describe("#letterPositions", () => {

  it ("returns an object specifying each index positions each character appears at in a stirng", 
  () => {
    const aSentence = "hello";
    const compare = {
      h: [0],
      e: [1],
      l: [2,3],
      o: [4],
    };
    assert.deepEqual(letterPositions(aSentence), compare);
  });

  it ("should skip spaces", () => {
    const aSentence = "lighthouse in the house";
    const compare = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(letterPositions(aSentence), compare);
  });
})