import { analyzeArray } from "./analyze-array";

test("function exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("function returns object with average, min, max, and length properties", () => {
  const propertyNames = ["average", "min", "max", "length"];
  const object = analyzeArray([]);

  propertyNames.forEach((propertyName) => {
    expect(typeof object[propertyName]).toBe("number");
  });
});

test("returns correct average", () => {
  const testCases = [
    { array: [], expected: 0 },
    { array: [8], expected: 8 },
    { array: [1, 8, 3, 4, 2, 6], expected: 4 },
  ];

  testCases.forEach((testCase) => {
    expect(analyzeArray(testCase.array).average).toBe(testCase.expected);
  });
});

test("returns correct min", () => {
  const testCases = [
    { array: [], expected: 0 },
    { array: [8], expected: 8 },
    { array: [1, 8, 3, 4, 2, 6], expected: 1 },
  ];

  testCases.forEach((testCase) => {
    expect(analyzeArray(testCase.array).min).toBe(testCase.expected);
  });
});

test("returns correct max", () => {
  const testCases = [
    { array: [], expected: 0 },
    { array: [8], expected: 8 },
    { array: [1, 8, 3, 4, 2, 6], expected: 8 },
  ];

  testCases.forEach((testCase) => {
    expect(analyzeArray(testCase.array).max).toBe(testCase.expected);
  });
});

test("returns correct length", () => {
  const testCases = [
    { array: [], expected: 0 },
    { array: [8], expected: 1 },
    { array: [1, 8, 3, 4, 2, 6], expected: 6 },
  ];

  testCases.forEach((testCase) => {
    expect(analyzeArray(testCase.array).length).toBe(testCase.expected);
  });
});
