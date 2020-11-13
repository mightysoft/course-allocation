import express from 'express';
import * as batchController from '../contollers/batchController.js';
const router = express.Router();


router.get('/', batchController.getAllBatchPost);
router.post('/create-batch', batchController.createBatchPost);
router.get('/batch-details/:id', batchController.getBatchPost);
router.patch('/update-batch/:id', batchController.updateBatchPost);
router.delete('/delete-batch/:id', batchController.deleteBatchPost);


export default router;