import mongoose from "mongoose";
import user from "./user.module.js";
import Product from "./product.module.js";

const costumerSchema = new mongoose.Schema({
    ...user.obj,  // ✅ This is the right way to reuse schema fields
    // address: {
    //     type: String,
    //     required: true
    // },
    // phone: {
    //     type: String,
    //     required: true
    // },
    role:{
        type: String,
        default: "costumer"
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
}, { timestamps: true });

const Costumer = mongoose.model('Costumer', costumerSchema);
export default Costumer;
