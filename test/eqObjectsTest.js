const eqObjects = require("../index").eqObjects;
const assert = require("chai").assert;

describe("#eqObjects", () => {

  it ("should return true for { a:'1', b: '2'} & { b: '2', a:'1'}", () => {

    assert.deepEqual(eqObjects({ a:'1', b: '2'}, { b: '2', a:'1'}), true);
  });

  it ("should return true for { c:'1', d: ['2', 3] } & { d: ['2', 3], c:'1' }", () => {

    assert.deepEqual(eqObjects({ c:'1', d: ['2', 3] }, { d: ['2', 3], c:'1'}), true);
  });

  it ("should return false for { c:'1', d: ['2', 3, 4 ] } & { d: ['2', 3], c:'1' }", () => {

    assert.deepEqual(eqObjects({ c:'1', d: ['2', 3, 4 ] }, { d: ['2', 3], c:'1' }), false);
  });

  it ("should return true for { a: '1', b: '2' } & { b: '2', a: '1' }", () => {

    assert.deepEqual(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });

  it ("should return false for { a: '1', b: '2' } & { a: '1', b: '4' }", () => {

    assert.deepEqual(eqObjects({ a: '1', b: '2' }, {  a: '1', b: '4' }), false);
  });

  it ("should return false for { a: '1', b: '2', c: '3' } & { c: '3', b: '2' }", () => {

    assert.deepEqual(eqObjects({ a: '1', b: '2', c: '3' }, { c: '3', b: '2' }), false);
  });

  it ("should return false for { a: '1', b: '2', c: '3' } & { a: '1', b: '2' }", () => {

    assert.deepEqual(eqObjects({ a: '1', b: '2', c: '3' }, { a: '1', b: '2' }), false);
  });

});
