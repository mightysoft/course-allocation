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
        type: Object
    },
    course : {
        teacherId:{
            type: mongoose.Schema.ObjectId,
            ref: 'Teacher',
        },
        section: {
            type: mongoose.Schema.ObjectId,
            ref: 'Section',
        },
        courseId :{
            type: mongoose.Schema.ObjectId,
            ref: 'Course',
        },
        type: Array
    }
})

export default mongoose.model('CourseAllocation',courseAllocationModel);