import express from 'express';
import * as sectionController from '../contollers/sectionController.js';
const router = express.Router();


router.get('/', sectionController.getAllSectionPost);
router.post('/create-section', sectionController.createSectionPost);
router.get('/section-details/:id', sectionController.getSectionPost);
router.patch('/update-section/:id', sectionController.updateSectionPost);
router.delete('/delete-section/:id', sectionController.deleteSectionPost);



export default router;