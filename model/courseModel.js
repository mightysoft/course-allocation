import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: [true, 'A course must have a course name'],
  },
  course_code: {
    type: String,
    required: [true, 'A course must have a course name'],
  },
  credit: Number
});

export default mongoose.model('Course', courseSchema);