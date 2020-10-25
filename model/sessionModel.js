import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    level: {
        type: String,
        required: [true, "A course allocation has a level"]
    },
    term: {
        type: String,
        required: [true, "A course allocation has a term"]
    },
    batch: {
        type: String,
        required: [true, "A course allocation has a batch"]
    },
    sections:[String],
    courseId: [{
        type:mongoose.Schema.ObjectId,
        ref:'Course'
    }]
})

export default mongoose.model('Session', sessionSchema);