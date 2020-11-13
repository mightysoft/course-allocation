import mongoose from 'mongoose';
const sectionSchema = new mongoose.Schema({
    sectionName: { 
        type : String,
        required: [true,'A course allocation has a section name!']
    }
})

export default mongoose.model('Section',sectionSchema);