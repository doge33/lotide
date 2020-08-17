// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("🧐Assertion Failed: " + actual + " !== " + expected);
  } else {
    console.log("💯💯💯Assertion Passed: " + actual + " === " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("tomato","tomato");
assertEqual("tomato", "watermelon");
assertEqual(4,4);
assertEqual(8,19);
