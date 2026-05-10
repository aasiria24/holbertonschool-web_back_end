/**
 * Updates student grades for a specific city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - The new grades to assign.
 * @returns {Array} A list of students in the city with their updated grades.
 */
export default function updateStudentGradeByإليك الحل الذي يجمع بين `filter` و `map` لتحديث درجات الطلاب بناءً على المدينة، مع الالتزام بكافة المتطلبات التقنية:

### الملف: `4-update_grade_by_city.js`

```javascript
/**
 * Updates student grades for a specific city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - Array of grade objects { studentId, grade }.
 * @returns {Array} Array of student objects with their updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // البحث عن درجة الطالب في مصفوفة newGrades
      const gradeObj = newGrades.filter((grade) => grade.studentId === student.id)[0];

      return {
        ...student,
        // إذا وجدت الدرجة نضع قيمتها، وإلا نضع 'N/A'
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
