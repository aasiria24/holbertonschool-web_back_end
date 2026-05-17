import fs from 'fs';

/**
 * Reads the database CSV file asynchronously and groups student first names by field.
 * @param {string} path - The path to the CSV database file.
 * @returns {Promise<object>} A promise that resolves to an object of arrays.
 */
export function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve({});
        return;
      }

      const studentsLines = lines.slice(1);
      const fields = {};

      for (const line of studentsLines) {
        const studentData = line.split(',');
        if (studentData.length === 4) {
          const firstname = studentData[0].trim();
          const field = studentData[3].trim();

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
      resolve(fields);
    });
  });
}
