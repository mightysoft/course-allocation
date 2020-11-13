import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
    level: {
        type: String,
        required: [true, "A course allocation has a level"]
    }
})

export default mongoose.model('Level', levelSchema);