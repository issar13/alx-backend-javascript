import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Route for homepage
router.get('/', AppController.getHomepage);

// Route for getting all students and their majors
router.get('/students', StudentsController.getAllStudents);

// Route for getting all students in a specific major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
