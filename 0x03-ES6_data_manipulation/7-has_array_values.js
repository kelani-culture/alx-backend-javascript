export default function hasValuesFromArray(set, array) {
  return array in Array.from(set);
}
