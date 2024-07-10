export function analyzeArray(array) {
  let average = 0;
  let sum = 0;
  let initialValue = 0;
  sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  if (array.length > 0) {
    average = sum / array.length;
  }

  let min = 0;
  let max = 0;
  const sortedArray = array.sort((a, b) => a - b);
  if (array.length > 0) {
    min = sortedArray[0];
    max = sortedArray[sortedArray.length - 1];
  }

  return {
    average,
    min,
    max,
    length: array.length,
  };
}
