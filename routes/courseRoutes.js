import express from 'express';
import * as courseController from '../contollers/courseController.js';
const router = express.Router();


router.get('/all-courses', courseController.getAllCoursePost);
router.post('/create-course', courseController.createCoursePost);
router.get('/get-course-post/:id', courseController.getCoursePost);
router.patch('/update-course', courseController.updateCoursePost);
router.delete('/delete-course', courseController.deleteCoursePost);



export default router;