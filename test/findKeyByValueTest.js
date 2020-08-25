const findKeyByValue = require("../index").findKeyByValue;
const assert = require("chai").assert;

describe("#findKeyByValue", () => {

  it ("returns key when value matches input", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      documentary: "Filthy Rich",
      crime: "CSI"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it ("returns undefined if no value matches input", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire",
      documentary: "Filthy Rich",
      crime: "CSI"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "House"), undefined);
  });
}); 