import Batch from '../model/batchModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllBatchPost = factory.getAll(Batch);

export const createBatchPost = factory.createOne(Batch);
export const getBatchPost = factory.getOne(Batch);
export const updateBatchPost = factory.updateOne(Batch);
export const deleteBatchPost = factory.deleteOne(Batch);