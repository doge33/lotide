const countOnly = require("../index").countOnly;
const assert = require("chai").assert;

describe("#countOnly", () => {

  it ("should return { Fang: 2, Jason: 1 } for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']", () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const namesToCount = { "Jason": true, "Karima": true, "Fang": true };

    assert.deepEqual(countOnly(firstNames, namesToCount), { Fang: 2, Jason: 1 });
  });

  it ("should give 'undefined' for Karima for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']", () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const namesToCount = { "Jason": true, "Karima": true, "Fang": true };

    assert.deepEqual(countOnly(firstNames, namesToCount).Karima, undefined);
  });

})