
import CourseAllocation from '../model/courseAllocationModel.js'
import * as factory from './handlerFactory.js';
// import Course from '../model/courseModel.js';
// import Level from '../model/levelModel.js';
// import Batch from '../model/batchModel.js';
// import Term from '../model/termModel.js';
// import Teacher from '../model/teacherModel.js';
// import Section from '../model/sectionModel.js';

import catchAsync from '../utils/catchAsync.js';
// import AppError from '../utils/appError.js';

export const createCourseAllocationPost = factory.createOne(CourseAllocation);
export const getCourseAlloOne = factory.getOne(CourseAllocation);

export const getAllCourseAllocationPost = catchAsync (async (req,res) =>{
    const data = await CourseAllocation.find()    
    return res.status(200).json({
        status: 'success',
        results: data.length,
        data
      });
})



// export const createOne = catchAsync(async (req, res, next) => {
//     const doc = await CourseAllocation.create(req.body);
//     res.status(201).json({
//       status: 'success',
//       doc,
//     });
//   });
//   export const getAll = catchAsync(async (req, res, next) => {
//     const docs = await CourseAllocation.find().sort({ createdAt: -1 });
//     // SEND Response res
//     res.status(200).json({
//       status: 'success',
//       results: docs.length,
//       docs
//     });
//   });