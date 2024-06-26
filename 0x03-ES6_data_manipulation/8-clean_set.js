export default function cleanSet(set, startString) {
  let result = '';
  if (!startString) {
    return;
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // Append the rest of the string after startString
      result += (result ? '-' : '') + value.substring(startString.length);
    }
  });
  return result;
}
