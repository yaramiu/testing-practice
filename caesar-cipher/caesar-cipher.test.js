import { caesarCipher } from "./caesar-cipher";

test("function exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesar cipher of empty string", () => {
  const testCases = [
    { string: "", shift: 0, expected: "" },
    { string: "", shift: 1, expected: "" },
    { string: "", shift: -1, expected: "" },
  ];

  testCases.forEach((testCase) => {
    const actual = caesarCipher(testCase.string, testCase.shift);
    expect(actual).toBe(testCase.expected);
  });
});

test("caesar cipher of single char string", () => {
  const testCases = [
    { string: "a", shift: 0, expected: "a" },
    { string: "a", shift: 1, expected: "b" },
    { string: "a", shift: -1, expected: "z" },
    { string: "z", shift: 1, expected: "a" },
    { string: "A", shift: 0, expected: "A" },
    { string: "A", shift: 1, expected: "B" },
    { string: "A", shift: -1, expected: "Z" },
    { string: "Z", shift: 1, expected: "A" },
    { string: ",", shift: 1, expected: "," },
  ];

  testCases.forEach((testCase) => {
    const actual = caesarCipher(testCase.string, testCase.shift);
    expect(actual).toBe(testCase.expected);
  });
});

test("caesar cipher of multi char string", () => {
  const testCases = [
    { string: "abc", shift: 0, expected: "abc" },
    { string: "abc", shift: 1, expected: "bcd" },
    { string: "abc", shift: -3, expected: "xyz" },
    { string: "xyz", shift: 3, expected: "abc" },
    { string: "ABC", shift: 0, expected: "ABC" },
    { string: "ABC", shift: 1, expected: "BCD" },
    { string: "ABC", shift: -3, expected: "XYZ" },
    { string: "XYZ", shift: 3, expected: "ABC" },
    { string: "HeLLo", shift: 3, expected: "KhOOr" },
    { string: "Hello, World!", shift: 3, expected: "Khoor, Zruog!" },
  ];

  testCases.forEach((testCase) => {
    const actual = caesarCipher(testCase.string, testCase.shift);
    expect(actual).toBe(testCase.expected);
  });
});
