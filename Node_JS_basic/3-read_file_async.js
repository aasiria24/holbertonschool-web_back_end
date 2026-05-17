const fs = require('fs');

/**
 * Counts the students in a CSV file asynchronously and returns a Promise.
 * @param {string} path - The path to the CSV database file.
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // قراءة الملف بشكل غير متزامن
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        // رفض الوعد في حال عدم وجود الملف أو حدوث خطأ
        reject(new Error('Cannot load the database'));
        return;
      }

      // تقسيم النص إلى أسطر وتصفية الأسطر الفارغة
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      // إزالة السطر الأول (Header)
      const studentsLines = lines.slice(1);
      
      const fields = {};
      let totalStudents = 0;

      for (const line of studentsLines) {
        const studentData = line.split(',');

        if (studentData.length === 4) {
          const firstname = studentData[0].trim();
          const field = studentData[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
          totalStudents += 1;
        }
      }

      // طباعة النتائج في الـ Console
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // حل الوعد بنجاح بعد إتمام الطباعة
      resolve();
    });
  });
}

module.exports = countStudents;
