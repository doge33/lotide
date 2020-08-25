const map = require("../index").map;
const assert = require("chai").assert;

describe("#map", () => {

  it ("performs a callback function on each item in array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(map(words, word => word[0]), results1);
  });

})