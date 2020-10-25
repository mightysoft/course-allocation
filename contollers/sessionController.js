import Session from '../model/sessionModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllSessionPost = factory.getAll(Session);

export const createSessionPost = factory.createOne(Session);
export const getSessionPost = factory.getOne(Session);
export const updateSessionPost = factory.updateOne(Session);
export const deleteSessionPost = factory.deleteOne(Session);