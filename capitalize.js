export function capitalize(string) {
  if (string.length === 0) {
    return string;
  } else if (string.length === 1) {
    return string.toUpperCase();
  }

  const firstChar = string.slice(0, 1);
  const restOfString = string.slice(1);

  return firstChar.toUpperCase().concat(restOfString);
}
