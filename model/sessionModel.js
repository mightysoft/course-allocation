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
    course: {
        course_name: {
            type: String,
            required: [true, 'A course must have a course name'],
        },
        course_code: {
            type: String,
            required: [true, 'A course must have a course code'],
        },
        credit: Number,
        type: Object,
        ref: 'Course',
        required: [true, 'sessions must belong to Course.'],
    }
})

export default mongoose.model('Session', sessionSchema);