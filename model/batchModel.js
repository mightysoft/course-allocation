import mongoose from 'mongoose';
const batchSchema =  new mongoose.Schema({
    batchName : {
        type : String,
        required : [true,'A courese alllocation have a batch name']
    }
})

export default mongoose.model('Batch', batchSchema);