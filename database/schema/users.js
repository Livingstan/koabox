import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    first_name: {
        type: String,
        required: "The name is required",
    },
    last_name: {
        type: String,
        required: "The name is required",
    },
    email: {
        type: String,
        required: "The name is required",
    },
    phone: {
        type: Number,
        required: "The name is required",
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});