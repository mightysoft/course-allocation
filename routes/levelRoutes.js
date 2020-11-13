import express from 'express';
import * as levelController from '../contollers/levelController.js';
const router = express.Router();


router.get('/', levelController.getAllLevelPost);
router.post('/create-level', levelController.createLevelPost);
router.get('/level-details/:id', levelController.getLevelPost);
router.patch('/update-level/:id', levelController.updateLevelPost);
router.delete('/delete-level/:id', levelController.deleteLevelPost);


export default router;