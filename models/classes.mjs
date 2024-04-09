import mongoose, { mongo } from 'mongoose';

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String,
        required: true
    }
});

const Classes = mongoose.model('Classes', classSchema);

export default Classes;