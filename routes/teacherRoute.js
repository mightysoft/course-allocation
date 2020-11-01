import express from 'express';
import * as teacherController from '../contollers/teacherController.js';
const router = express.Router();


router.get('/', teacherController.getAllTeacherPost);
router.post('/create-teacher', teacherController.createTeacherPost);
router.get('/teacher-details/:id', teacherController.getTeacherPost);
router.patch('/update-teacher/:id', teacherController.updateTeacherPost);
router.delete('/delete-teacher/:id', teacherController.deleteTeacherPost);



export default router;