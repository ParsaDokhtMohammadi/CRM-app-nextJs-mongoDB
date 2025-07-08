import { Schema , model , models } from "mongoose";
const customerSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    lastName:{
        type : String,
        required:true,
        minLength : 3
    },
    phone:String,
    address : String,
    postalCode:Number,
    data:Date,
    products:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:()=>Date.now(),
    }
})
const Customer = models.Customer || model("Customer",customerSchema)
export default Customer