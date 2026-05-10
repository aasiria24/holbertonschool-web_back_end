/**
 * Extracts IDs from a list of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array} An array of IDs, or an empty array if the input is invalid.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
