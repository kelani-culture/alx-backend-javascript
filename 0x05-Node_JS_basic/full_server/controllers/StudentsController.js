// full_server/controllers/StudentsController.js
import readDatabase from '../utils.js';

class StudentsController {
    static getAllStudents(req, res) {
        const databasePath = process.argv[2];

        readDatabase(databasePath)
            .then((data) => {
                let response = 'This is the list of our students\n';
                const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

                fields.forEach((field) => {
                    const list = data[field].join(', ');
                    response += `Number of students in ${field}: ${data[field].length}. List: ${list}\n`;
                });

                res.status(200).send(response.trim());
            })
            .catch((error) => {
                res.status(500).send('Cannot load the database');
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const databasePath = process.argv[2];

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(databasePath)
            .then((data) => {
                if (!data[major]) {
                    res.status(200).send(`List: `);
                    return;
                }

                const list = data[major].join(', ');
                res.status(200).send(`List: ${list}`);
            })
            .catch((error) => {
                res.status(500).send('Cannot load the database');
            });
    }
}

export default StudentsController;
