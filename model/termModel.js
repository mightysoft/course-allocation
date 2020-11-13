import mongoose from 'mongoose';

const termSchema = new mongoose.Schema({
    term: {
        type: String,
        required: [true, "A course allocation has a term"]
    }
})

export default mongoose.model('Term', termSchema)