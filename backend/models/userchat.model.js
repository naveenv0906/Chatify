import mongoose from 'mongoose';

const userchatSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
}, { timestamps: true });

const Userchat = mongoose.model('Userchat', userchatSchema);

export default Userchat; // Ensure this is correct if you intend to use default export
