import express from 'express';
import * as termController from '../contollers/termController.js';
const router = express.Router();


router.get('/', termController.getAllTermPost);
router.post('/create-term', termController.createTermPost);
router.get('/term-details/:id', termController.getTermPost);
router.patch('/update-term/:id', termController.updateTermPost);
router.delete('/delete-term/:id', termController.deleteTermPost);



export default router;