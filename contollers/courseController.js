import Course from '../model/courseModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllCoursePost = factory.getAll(Course);

export const createCoursePost = factory.createOne(Course);
export const getCoursePost = factory.getOne(Course);
export const updateCoursePost = factory.updateOne(Course);
export const deleteCoursePost = factory.deleteOne(Course);

