/**
 * Updates student grades for a specific city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - Array of grade objects { studentId, grade }.
 * @returns {Array} Array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
