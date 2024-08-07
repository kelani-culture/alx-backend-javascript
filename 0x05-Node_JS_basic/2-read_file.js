// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
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

        console.log(`Number of students: ${numberOfStudents}`);
        for (const field in students) {
            const studentList = students[field];
            console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
        }
    } catch (error) {
        console.error('Cannot load the database');
        throw error;
    }
}

module.exports = countStudents;
