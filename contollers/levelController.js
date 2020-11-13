import Level from '../model/levelModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllLevelPost = factory.getAll(Level);

export const createLevelPost = factory.createOne(Level);
export const getLevelPost = factory.getOne(Level);
export const updateLevelPost = factory.updateOne(Level);
export const deleteLevelPost = factory.deleteOne(Level);