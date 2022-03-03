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
    expected = 1e100;
    actual = sum(1e100, 0);
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
  test('can add two decimals', () => {
    expected = 0.7;
    actual = sum(0.5, 0.2);
    expect(actual).toBeCloseTo(expected);
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
  test("can divide two positive numbers", () => {
    expected = 500;
    actual = divide(1000, 2);
    expect(actual).toBe(expected);
  })
  test("can divide two negative numbers", () => {
    expected = 500;
    actual = divide(-1000, -2);
    expect(actual).toBe(expected);
  })
  test("can divide by zero", () => {
    expected = -Infinity;
    actual = divide(-1000, 0);
    expect(actual).toBe(expected);
  })
});

describe('modulus', () => {

  test("finding the modulus of two positive numbers", () => {
    expected = 0;
    actual = modulus(1000, 2);
    expect(actual).toBe(expected);
  })

  test("finding a a non-zero modulus", () => {
    expected = 1;
    actual = modulus(10, 3);
    expect(actual).toBe(expected);
  })

  test("dividing by 0", () => {
    expected = NaN;
    actual = modulus(10, 0);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
test("returns true when given even number", () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  })
  
  test("returns false when given odd number", () => {
    expected = false;
    actual = even(9);
    expect(actual).toBe(expected);
  })
});

describe('odd', () => {
  test("returns true when given odd number", () => {
    expected = true;
    actual = odd(9);
    expect(actual).toBe(expected);
  })
  
  test("returns false when given even number", () => {
    expected = false;
    actual = odd(10);
    expect(actual).toBe(expected);
  })
});
