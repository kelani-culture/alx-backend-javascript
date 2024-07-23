// full_server/utils.js
import fs from 'fs';

const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            if (lines.length === 0) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const students = {};

            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line === '') continue;

                const [firstName, , , field] = line.split(',');

                if (!students[field]) {
                    students[field] = [];
                }

                students[field].push(firstName);
            }

            resolve(students);
        });
    });
};

export default readDatabase;
