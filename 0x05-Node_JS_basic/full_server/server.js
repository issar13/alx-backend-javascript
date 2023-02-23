import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import AppController from './controllers/AppController';
import StudentsController from './controllers/StudentsController';
import router from './routes';

const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.get('/', AppController.getHomepage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
