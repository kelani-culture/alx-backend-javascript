export default function hasValuesFromArray(set, array) {
  return array in [...set];
}
