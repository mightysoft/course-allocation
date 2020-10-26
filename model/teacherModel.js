import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    teacherInitial: {
        type: String,
        required: [true, "A course allocation has a teacher Initial"]
    },
    takenCredit: {
        type: Number,
        required: [true, "A course allocation has a taken Credit"]
    },
    courseId: [{
        type:mongoose.Schema.ObjectId,
        ref:'Course'
    }]
})

export default mongoose.model('Teacher', teacherSchema);