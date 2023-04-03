import mongoose from "mongoose";
const {Schema} = mongoose;

const orderSchema = new Schema({
    productId: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    sellerId: {
        type: String,
        require: true,
    },
    buyerId: {
        type: String,
        require: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    payment_intent: {
        type: String,
        require: true,
    }
},
    {
    timestamps: true,
    }
)
export default mongoose.model("Order",orderSchema);