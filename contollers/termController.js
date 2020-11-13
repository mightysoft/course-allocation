import Term from '../model/termModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllTermPost = factory.getAll(Term);

export const createTermPost = factory.createOne(Term);
export const getTermPost = factory.getOne(Term);
export const updateTermPost = factory.updateOne(Term);
export const deleteTermPost = factory.deleteOne(Term);