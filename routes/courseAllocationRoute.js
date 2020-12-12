import express from 'express';
import * as courseAllocationController from '../contollers/courseAllocationController.js';
const router = express.Router();


router.get('/', courseAllocationController.getAllCourseAllocationPost);
router.post('/create-courseAllocation', courseAllocationController.createCourseAllocationPost)
router.get('/:id', courseAllocationController.getCourseAlloOne)

export default router;