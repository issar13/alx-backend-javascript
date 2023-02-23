import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.locals.filename);
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase()
        .localeCompare(b.toLowerCase()));
      let output = 'This is the list of our students\n';
      fields.forEach((field) => {
        const studentList = students[field].sort();
        output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });
      res.status(200).send(output);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!major || (major !== 'CS' && major !== 'SWE')) {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const students = await readDatabase(req.app.locals.filename);
        const studentList = students[major] ? students[major].sort() : [];
        const output = `List: ${studentList.join(', ')}`;
        res.status(200).send(output);
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
