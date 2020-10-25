import express from 'express';
import * as teacherController from '../contollers/teacherController.js';
const router = express.Router();


router.get('/', teacherController.getAllTeacherPost);
router.post('/create-teacher', teacherController.createTeacherPost);
router.get('/teacher-details/:id', teacherController.getTeacherPost);
router.patch('/update-teacher', teacherController.updateTeacherPost);
router.delete('/delete-teacher', teacherController.deleteTeacherPost);



export default router;