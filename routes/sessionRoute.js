import express from 'express';
import * as sessionController from '../contollers/sessionController.js';
const router = express.Router();


router.get('/', sessionController.getAllSessionPost);
router.post('/create-session', sessionController.createSessionPost);
router.get('/session-details/:id', sessionController.getSessionPost);
router.patch('/update-session/:id', sessionController.updateSessionPost);
router.delete('/delete-session/:id', sessionController.deleteSessionPost);



export default router;