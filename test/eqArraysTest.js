const eqArrays = require("../index").eqArrays;
const assert = require("chai").assert;

describe("#eqArrays", () => {

  it ("should return true for two arrays [1, 2, 3] & [1, 2, 3]", () => {

    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it ("should return true for two arrays ['1', '2', '3'] & ['1', '2', '3']", () => {

    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it ("should return false for two arrays ['1', '2', '3'] & ['1', '2', 3]", () => {

    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  it ("should return false for two arrays [1, 2, 3], [3, 2, 1]", () => {

    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

})



