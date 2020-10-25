import express from 'express';
import * as courseController from '../contollers/courseController.js';
const router = express.Router();


router.get('/', courseController.getAllCoursePost);
router.post('/create-course', courseController.createCoursePost);
router.get('/course-details/:id', courseController.getCoursePost);
router.patch('/update-course', courseController.updateCoursePost);
router.delete('/delete-course', courseController.deleteCoursePost);



export default router;