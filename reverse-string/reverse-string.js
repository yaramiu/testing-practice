export function reverseString(string) {
  if (string.length <= 1) {
    return string;
  }

  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString.concat(string[i]);
  }

  return reverseString;
}
