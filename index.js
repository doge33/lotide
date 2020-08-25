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

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
//the last three are not necessary given Chai library;
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

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
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
};