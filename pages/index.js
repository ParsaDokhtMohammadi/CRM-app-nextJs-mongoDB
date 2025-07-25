import HomePage from '@/components/template/HomePage'
import Customer from '@/models/Customer'
import { connectDB } from '@/utils/connectDB'
import { notFound } from 'next/navigation'
import React from 'react'

const index = ({customers}) => {

  return (
    <><HomePage customers={customers}></HomePage></>
  )
}

export default index

export async function getServerSideProps() {
  try{
    await connectDB()
    const customers =await Customer.find()
    return {
      props:{
        customers : JSON.parse(JSON.stringify(customers))
      }
    }
  }
  catch(err){
    return{
      notFound:true
    }
  }
}