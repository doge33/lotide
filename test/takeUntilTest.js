const assert = require("chai").assert;
const takeUntil = require("../index").takeUntil;

describe("#takeUntil", () => {

it ("should return [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = [ 1, 2, 5, 7, 2 ];
  assert.deepEqual(takeUntil(data1, x => x < 0), results1);
});

it ("should return [ 'I\'ve', 'been', 'to', 'Hollywood' ] for ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
  assert.deepEqual(takeUntil(data2, x => x === ","), results2);
});

})