const assert = require("chai").assert;
const tail = require("../index").tail;


//the mocha & chai based test codes

describe("#tail", ()=> {
  it ("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", ()=> {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it ("returns [] for []", ()=> {
    assert.deepEqual(tail([]), []);
  });

  it ("returns [] for array with one element", ()=> {
    assert.deepEqual(tail(['Lighthouse']), []);
  });

  it ("should not modify the original array", ()=> {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
  
})
