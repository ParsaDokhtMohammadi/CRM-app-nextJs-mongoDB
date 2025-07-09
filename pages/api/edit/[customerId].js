import Customer from "@/models/Customer"
import { connectDB } from "@/utils/connectDB"

export default async function handler(req,res) {
         try{
                await connectDB()
            }
            catch(err){
                console.log(err)
                res.status(500).json({status:"failed",message:"error in connecting to db"})
                
            }
            if (req.method==="PATCH"){
                const {customerId} = req.query
                const {data} = req.body
                try{
                    const customer = await Customer.findById(customerId)
                    customer.name = data.name
                    customer.lastName = data.lastName
                    customer.email = data.email
                    customer.phone = data.phone
                    customer.address = data.address
                    customer.postalCode = data.postalCode
                    customer.date = data.date
                    customer.products = data.products
                    customer.updatedAt = Date.now()
                    customer.save()
                    res.status(200).json({status:"success",message:"data updated",data:customer})
                }
                catch(err){
                    console.log(err)
                    res.status(500).json({status:"failed",message:"error updating data"})
                }
            }
}