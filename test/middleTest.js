const assert = require("chai").assert;
const middle = require("../middle");


//test code
describe("#middle", ()=> {

  it ("returns [5] for [1,3,5,7,9]", ()=>{
    assert.deepEqual(middle([1,3,5,7,9]), [5]);
  });

  it ("returns [5,6](middle two elements) for [1,3,5,6,9,11]", ()=>{
    assert.deepEqual(middle([1,3,5,6,9,11]), [5,6]);
  });

  it ("returns [] for [9](array with only one element)", ()=>{
    assert.deepEqual(middle([9]), []);
  });

  it ("returns [] for [2, 15](array with only two element)", ()=>{
    assert.deepEqual(middle([2, 15]), []);
  });

})
