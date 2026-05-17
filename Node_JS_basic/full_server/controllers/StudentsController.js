import { readDatabase } from '../utils';

class StudentsController {
  /**
   * Retrieves and formats all students from the database.
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv[2];

    readDatabase(dataPath)
      .then((fields) => {
        const responseParts = ['This is the list of our students'];
        
        // ترتيب التخصصات أبجدياً ودون الحساسية لحالة الأحرف
        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          const names = fields[field];
          responseParts.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

        return response.status(200).send(responseParts.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  /**
   * Retrieves students filtered by their major (CS or SWE).
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const dataPath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(dataPath)
      .then((fields) => {
        const names = fields[major] || [];
        return response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
