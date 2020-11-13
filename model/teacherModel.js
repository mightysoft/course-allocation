import mongoose from 'mongoose';
import validator from 'validator'

const teacherSchema = new mongoose.Schema({
    teacherName : {
        type: String,
        required: [true, "A course allocation has a teacher name"]
    },
    teacherInitial: {
        type: String,
        required: [true, "A course allocation has a teacher Initial"]
    },
    takenCredit: {
        type: Number,
        required: [true, "A course allocation has a taken Credit"],
        maxlength: [15, 'A course allocation have a less than or equal 15 credit he/she taken'],
        minlength: [10, 'A course allocation have a more than or equal 10 credit he/she taken']
    },
    teacherId: {
        type: String,
        required: [true, "A course allocation has a teacher Id"]
    },
    teacherEmail: {
        type: String,
        required: [true, 'Please Provide your email!'],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, 'please Provide a valid email']
    }
})

export default mongoose.model('Teacher', teacherSchema);