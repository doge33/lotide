# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sandylx/lotide`

**Require it:**

`const _ = require('@sandylx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: grab first element of array
* `tail(array)`: grab all, except the first, elements of an array; return as array
* `middle(array)`: grab middle or middle two elements of an array; return as array
* `findKey(obejct, callback)`: find key whose value satisfies a certian condition
* `findKeyByValue(object, value)`: find key by matching its value to input;
* `letterPositions(sentence)`: returns an object showing the number of times each letter appears in a string
* `map(array,callback)`: execute a callback function on each item of an array
* `takeUntil(array, callback)`: grab slice of array with elements taken from the beginnning until a condition is met
* `countLetters(sentence)`: returns a count of each of the letters in a sentence;
* `countOnly(array, itemsToCount)`: given an array of items and the items to count, returns an object of the times each of those items appeared in the array.
* `eqArrays(arr1, arr2)`: compare the sameness of two arrays;
* `eqObjects(obj1, obj2)`: compare the sameness of two objects;