import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true, versionKey: false });

export default mongoose.model('Product', productSchema); 