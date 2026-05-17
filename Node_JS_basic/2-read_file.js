const fs = require('fs');

/**
 * Counts the students in a CSV file and logs the statistics.
 * @param {string} path - The path to the CSV database file.
 */
function countStudents(path) {
  try {
    // قراءة الملف بشكل متزامن وتحويله لنص
    const data = fs.readFileSync(path, 'utf-8');
    
    // تقسيم النص إلى أسطر وتصفية الأسطر الفارغة
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // إزالة السطر الأول (Header)
    const studentsLines = lines.slice(1);
    
    // كائن لتخزين الطلاب حسب التخصص
    const fields = {};
    let totalStudents = 0;

    for (const line of studentsLines) {
      const studentData = line.split(',');
      
      // التأكد من أن السطر يحتوي على البيانات المطلوبة بالكامل
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

    // طباعة العدد الإجمالي للطلاب
    console.log(`Number of students: ${totalStudents}`);

    // طباعة تفاصيل كل تخصص
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (error) {
    // رمي الخطأ المطلوب إذا لم يتم العثور على الملف أو فشلت القراءة
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
