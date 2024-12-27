import {
  add, subtract, multiply, divide,
} from '../calculator.js';

describe('Calculator', () => {
  test('adds two numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
  });

  test('subtracts two numbers correctly', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  test('multiplies two numbers correctly', () => {
    expect(multiply(3, 3)).toBe(9);
  });

  test('divides two numbers correctly', () => {
    expect(divide(6, 2)).toBe(3);
  });

  // test('throws error on division by zero', () => {
  //   expect(() => divide(6, 0)).toThrow('Division by zero');
  // });
});
