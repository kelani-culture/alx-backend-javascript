/** @format */

export default function appendToEachArrayValue(array, appendString) {
  for (const arr of array) {
    array[array.indexOf(arr)] = appendString + arr;
  }
  return array;
}
