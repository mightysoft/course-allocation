import mongoose from 'mongoose';
const sectionSchema = new mongoose.Schema({
    sectionName: { 
        type : String,
        maxlength: [45, 'A course allocation have a less than or equal 45 students in one section'],
        minength: [35, 'A course allocation have a more than or equal 35 students in one section']
    }
})

export default mongoose.model('Section',sectionSchema);