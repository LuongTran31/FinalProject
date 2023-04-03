import mongoose, { Schema } from "mongoose";
const {Schema} = mongoose

const productSchema = new Schema({
    userId: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    totalRating: {
        type: Number,
        default: 0,
    },
    ratingNumber: {
        type: Number,
        default: 0,
    },
    cat: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    cover: {
        type: String,
        require: true,
    },
    images: {
        type: [String],
        require: false,
    },
    shortDesc: {
        type: String,
        require: true,
    },
    deliveryTime: {
        type: Number,
        require: true,
    },
    revisionNumber: {
        type: Number,
        require: true,
    },
    features: {
        type: [String],
        require: false,
    },
    sales:  {
        type: Number,
        default: 0,
    }
},{
    timestamps: true,
})

export default mongoose.model("Product",productSchema);