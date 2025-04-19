import mongoose from "mongoose";
import  user from "./user.module.js";

import Product from "./product.module.js";
const sellerSchema = new mongoose.Schema({
    ...user.obj,  // ✅ This is the right way to reuse schema fields
    address: {
        type: String,
    },
    phone: {
        type: String,
     
    },
    role:{
        type: String,
        default: "seller"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
        
    }],
}, { timestamps: true });
const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;