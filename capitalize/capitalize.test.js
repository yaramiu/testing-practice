import { capitalize } from "./capitalize";

test("function exists", () => {
  expect(capitalize).toBeDefined();
});

test("capital of empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capital of single char string", () => {
  const testCases = [
    { input: "a", expected: "A" },
    { input: "A", expected: "A" },
  ];

  testCases.forEach((testCase) => {
    const actual = capitalize(testCase.input);
    expect(actual).toBe(testCase.expected);
  });
});

test("capital of multi char string", () => {
  const testCases = [
    { input: "string", expected: "String" },
    { input: "STRING", expected: "STRING" },
    { input: "sTrInG", expected: "STrInG" },
    { input: "StRiNg", expected: "StRiNg" },
  ];

  testCases.forEach((testCase) => {
    const actual = capitalize(testCase.input);
    expect(actual).toBe(testCase.expected);
  });
});
