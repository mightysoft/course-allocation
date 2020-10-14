import express from 'express';
import * as sessionController from '../contollers/sessionController.js';
const router = express.Router();


router.get('/all-session', sessionController.getAllCoursePost);
router.post('/create-session', sessionController.createCoursePost);
router.get('/get-session-post/:id', sessionController.getCoursePost);
router.patch('/update-session/:id', sessionController.updateCoursePost);
router.delete('/delete-session/:id', sessionController.deleteCoursePost);



export default router;