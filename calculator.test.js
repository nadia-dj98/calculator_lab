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
  test('can subtract two small positive numbers', () => {
    expected = 50;
    actual = subtract(150, 100);
    expect(actual).toBe(expected);
  });

  test('can subtract one postive and one negative number', () => {
    expected = 110;
    actual = subtract(100, -10);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -90;
    actual = subtract(-100, -10);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 100;
    actual = subtract(100, 0);
    expect(actual).toBe(expected);
  });

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
