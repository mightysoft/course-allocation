import Session from '../model/sessionModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllCoursePost = factory.getAll(Session);

export const createCoursePost = factory.createOne(Session);
export const getCoursePost = factory.getOne(Session);
export const updateCoursePost = factory.updateOne(Session);
export const deleteCoursePost = factory.deleteOne(Session);