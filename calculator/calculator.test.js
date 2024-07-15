import { calculator } from "./calculator";

test("calculator object exists", () => {
  expect(calculator).toBeDefined();
});

test("calculator has add method", () => {
  expect(typeof calculator.add).toBe("function");
});

test("calculator has subtract method", () => {
  expect(typeof calculator.subtract).toBe("function");
});

test("calculator has divide method", () => {
  expect(typeof calculator.divide).toBe("function");
});

test("calculator has multiply method", () => {
  expect(typeof calculator.multiply).toBe("function");
});

test("add adds two numbers", () => {
  const testCases = [
    { num1: 0, num2: 0, expected: 0 },
    { num1: 0, num2: 1, expected: 1 },
    { num1: 1, num2: 0, expected: 1 },
    { num1: 1, num2: 1, expected: 2 },
    { num1: 1, num2: -1, expected: 0 },
    { num1: -1, num2: 1, expected: 0 },
    { num1: -1, num2: -1, expected: -2 },
  ];

  testCases.forEach((testCase) => {
    const actual = calculator.add(testCase.num1, testCase.num2);
    expect(actual).toBe(testCase.expected);
  });
});

test("subtract subtracts two numbers", () => {
  const testCases = [
    { num1: 0, num2: 0, expected: 0 },
    { num1: 0, num2: 1, expected: -1 },
    { num1: 1, num2: 0, expected: 1 },
    { num1: 1, num2: 1, expected: 0 },
    { num1: 1, num2: -1, expected: 2 },
    { num1: -1, num2: 1, expected: -2 },
    { num1: -1, num2: -1, expected: 0 },
  ];

  testCases.forEach((testCase) => {
    const actual = calculator.subtract(testCase.num1, testCase.num2);
    expect(actual).toBe(testCase.expected);
  });
});

test("divide divides two numbers", () => {
  const testCases = [
    { num1: 0, num2: 0, expected: NaN },
    { num1: 0, num2: 1, expected: 0 },
    { num1: 1, num2: 0, expected: Infinity },
    { num1: 1, num2: 1, expected: 1 },
    { num1: 1, num2: -1, expected: -1 },
    { num1: -1, num2: 1, expected: -1 },
    { num1: -1, num2: -1, expected: 1 },
  ];

  testCases.forEach((testCase) => {
    const actual = calculator.divide(testCase.num1, testCase.num2);
    expect(actual).toBe(testCase.expected);
  });
});

test("multiply multiplies two numbers", () => {
  const testCases = [
    { num1: 0, num2: 0, expected: 0 },
    { num1: 0, num2: 1, expected: 0 },
    { num1: 1, num2: 0, expected: 0 },
    { num1: 1, num2: 1, expected: 1 },
    { num1: 1, num2: -1, expected: -1 },
    { num1: -1, num2: 1, expected: -1 },
    { num1: -1, num2: -1, expected: 1 },
  ];

  testCases.forEach((testCase) => {
    const actual = calculator.multiply(testCase.num1, testCase.num2);
    expect(actual).toBe(testCase.expected);
  });
});
