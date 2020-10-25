import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, 'A course must have a course name'],
  },
  courseCode: {
    type: String,
    required: [true, 'A course must have a course name'],
  },
  credit: Number
  
});

export default mongoose.model('Course', courseSchema);