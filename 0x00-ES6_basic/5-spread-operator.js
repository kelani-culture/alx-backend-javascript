/** @format */

export default function concatArrays(array1, array2, string) {
  const arr = array1.concat(array2).concat(...string);
  return arr;
}
