import { reverseString } from "./reverse-string";

test("function exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverse of empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverse of single char string", () => {
  const testCases = [
    { input: "a", expected: "a" },
    { input: "A", expected: "A" },
  ];

  testCases.forEach((testCase) => {
    const actual = reverseString(testCase.input);
    expect(actual).toBe(testCase.expected);
  });
});

test("reverse of multi char string", () => {
  const testCases = [
    { input: "string", expected: "gnirts" },
    { input: "String", expected: "gnirtS" },
    { input: "sTrInG", expected: "GnIrTs" },
    { input: "StRiNg", expected: "gNiRtS" },
    { input: "racecar", expected: "racecar" },
  ];

  testCases.forEach((testCase) => {
    const actual = reverseString(testCase.input);
    expect(actual).toBe(testCase.expected);
  });
});
