// 3-read_file_async.js

const fs = require('fs').promises;

function countStudents(path) {
    return fs.readFile(path, 'utf8')
        .then((data) => {
            const lines = data.trim().split('\n');
            if (lines.length === 0) {
                throw new Error('Cannot load the database');
            }

            const students = {};
            let numberOfStudents = 0;

            for (let i = 1; i < lines.length; i++) { // Skip header
                const line = lines[i].trim();
                if (line === '') continue; // Skip empty lines

                const [firstName, , , field] = line.split(',');

                if (!students[field]) {
                    students[field] = [];
                }

                students[field].push(firstName);
                numberOfStudents++;
            }

            let result = `Number of students: ${numberOfStudents}\n`;
            for (const field in students) {
                const studentList = students[field];
                result += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
            }
            return result;
        })
        .catch((error) => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
