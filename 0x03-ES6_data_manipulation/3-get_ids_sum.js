export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) { return []; };
  return array.reduce((total, data) => total + data.id, 0);
}
