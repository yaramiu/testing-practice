export function caesarCipher(string, shift) {
  if (string.length === 0) {
    return string;
  }

  let shiftedChars = "";
  for (let i = 0; i < string.length; i++) {
    const shiftedChar = shiftChar(string[i], shift);
    shiftedChars = shiftedChars.concat(shiftedChar);
  }

  return shiftedChars;
}

function shiftChar(char, shift) {
  const isAlphabetical = char.match(/[A-Za-z]/);
  if (!isAlphabetical) {
    return char;
  }

  const lowerCaseChar = char.toLowerCase();
  const isLowerCase = char === lowerCaseChar;

  const shiftedCharCode = calculateShift(
    char.charCodeAt(0),
    shift,
    isLowerCase
  );

  return String.fromCharCode(shiftedCharCode);
}

function calculateShift(charCode, shift, isLowerCase) {
  const MIN_UPPERCASE_CODE = 65;
  const MAX_UPPERCASE_CODE = 90;
  const MIN_LOWERCASE_CODE = 97;
  const MAX_LOWERCASE_CODE = 122;

  let shiftedCharCode = charCode + shift;
  let newShift = 0;

  if (!isLowerCase && shiftedCharCode < MIN_UPPERCASE_CODE) {
    newShift = MIN_UPPERCASE_CODE - shiftedCharCode - 1;
    shiftedCharCode = MAX_UPPERCASE_CODE - newShift;
  } else if (!isLowerCase && shiftedCharCode > MAX_UPPERCASE_CODE) {
    newShift = shiftedCharCode - MAX_UPPERCASE_CODE - 1;
    shiftedCharCode = MIN_UPPERCASE_CODE + newShift;
  } else if (isLowerCase && shiftedCharCode < MIN_LOWERCASE_CODE) {
    newShift = MIN_LOWERCASE_CODE - shiftedCharCode - 1;
    shiftedCharCode = MAX_LOWERCASE_CODE - newShift;
  } else if (isLowerCase && shiftedCharCode > MAX_LOWERCASE_CODE) {
    newShift = shiftedCharCode - MAX_LOWERCASE_CODE - 1;
    shiftedCharCode = MIN_LOWERCASE_CODE + newShift;
  }

  return shiftedCharCode;
}
