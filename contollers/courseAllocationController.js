
import CourseAllocation from '../model/courseAllocationModel.js'
import * as factory from './handlerFactory.js';


export const createCourseAllocationPost = factory.createOne(CourseAllocation);
export const getAllCourseAllocationPost = factory.getAll(CourseAllocation);


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