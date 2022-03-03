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
    expected = 1000;
    actual = sum(500, 500);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -5;
    actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 1000;
    actual = sum(1000, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("can subtract two small positive numbers", () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  })

  test("can subtract negative numbers", () => {
    expected = 5;
    actual = subtract(2, -3);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {
  test("can multiply two positive numbers", () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);
  })

  test("can multiply two negative numbers", () => {
    expected = 6;
    actual = multiply(-2, -3);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
