import Teacher from '../model/teacherModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllTeacherPost = factory.getAll(Teacher);
export const createTeacherPost = factory.createOne(Teacher);
export const getTeacherPost = factory.getOne(Teacher);
export const updateTeacherPost = factory.updateOne(Teacher);
export const deleteTeacherPost = factory.deleteOne(Teacher);