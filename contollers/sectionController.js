import Section from '../model/sectionModel.js';

// import AppError from '../utils/appError.js';
// import catchAsync from '../utils/catchAsync.js';
// import factory from './handlerFactory.js';
import * as factory from './handlerFactory.js';
// const factory = require('./handlerFactory');

export const getAllSectionPost = factory.getAll(Section);

export const createSectionPost = factory.createOne(Section);
export const getSectionPost = factory.getOne(Section);
export const updateSectionPost = factory.updateOne(Section);
export const deleteSectionPost = factory.deleteOne(Section);