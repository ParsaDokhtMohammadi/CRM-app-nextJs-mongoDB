import Customer from "@/models/Customer";
import { connectDB } from "@/utils/connectDB";

export default async function handler(req,res){
    try{
        await connectDB()
    }
    catch(err){
        console.log(err)
        res.status(500).json({status:"failed",message:"error in connecting to db"})
        return
    }
    if (req.method==="POST"){
        const {data} = req.body
        if (!data.name || !data.lastName || !data.email){
            return res.status(400).json({status:"failed",message:"invalid data"})
        }
        try{
            const customer = await Customer.create(data)
            res.status(201).json({status:"success",message:"data created",data:data})
        }
        catch(err){
            console.log(err)
            res.status(500).json({status:"failed",message:"error storing data in db"})
        }
    }
} 