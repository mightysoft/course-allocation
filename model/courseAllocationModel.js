import mongoose from 'mongoose';

const courseAllocationModel = new mongoose.Schema({
    session : {
        level: {
            type: mongoose.Schema.ObjectId,
            ref: 'Level',
        },
        term:{
            type: mongoose.Schema.ObjectId,
            ref: 'Term',
        },
        batch:{
            type: mongoose.Schema.ObjectId,
            ref: 'Batch',
        }
    },
    course : [{
        teacher:{
            type: mongoose.Schema.ObjectId,
            ref: 'Teacher',
        },
        section:[{
            type: mongoose.Schema.ObjectId,
            ref: 'Section',
        }],
        course :{
            type: mongoose.Schema.ObjectId,
            ref: 'Course',
        }
    }]
    
})
// Query middleware
courseAllocationModel.pre(/^find/, function (next) {
    this.populate({
      path: 'course.teacher',
      select: '-__v'
    }).populate({
        path: 'course.section',
        select: '-__v'
      }).populate({
        path: 'course.course',
        select: '-__v'
      }).populate({
        path: 'session.level',
        select: '-__v'
      }).populate({
        path: 'session.term',
        select: '-__v'
      }).populate({
        path: 'session.batch',
        select: '-__v'
      })
    next();
  });

export default mongoose.model('CourseAllocation',courseAllocationModel);