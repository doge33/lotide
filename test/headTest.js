//test for head.js
//const assertEqual = require("../assertEqual"); //=>this is your own assertion function

const head = require("../index").head;
const assert = require("chai").assert;

//the mocha & chai based test codes

describe("#head", ()=> {
  
  it("returns 1 for [1,2,3]", ()=> {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", ()=>{
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", ()=>{
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

  it("returns 'undefined' for []", ()=>{
    assert.strictEqual(head([]), undefined);
  });
});

