import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required:true, ref:"Use"},
    orderItem:[
        {
            name:{type:String, required:true},
            qty:{type:Number, required:true},
            
        }
    ]
})