const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 10000;
    actual = sum(5000, 5000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -18;
    actual = sum(-8, -10);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 20;
    actual = sum(0, 20);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
