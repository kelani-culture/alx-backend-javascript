export default function getStudentsByLocation(array, location) {
  if (!Array.isArray(array)) { return []; }
  return array.filter((data) => data.location === location);
}
