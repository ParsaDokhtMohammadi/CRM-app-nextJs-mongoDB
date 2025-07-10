import { connectDB } from "@/utils/connectDB"
import Customer from "@/models/Customer"
export default async function handler(req, res) {
    try {
        await connectDB()
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ status: "failed", message: "error in connecting to db" })

    }
    if (req.method==="GET"){
        const {customerId} = req.query
        try{
            const customer = await Customer.findById(customerId)
            res.status(200).json({status:"success",message:"data fetched",data:customer})
            
        }
        catch(err){
            console.log(err);
             res.status(500).json({ status: "failed", message: "error fetching data from db" })
        }
    }
}