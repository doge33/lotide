// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');

//Further clean up(stretch): we won't need any of the assertion functions given mocha & chai. Clean that up later.

module.exports = {
  head,
  tail,
  middle,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  countLetters,
  countOnly,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
};