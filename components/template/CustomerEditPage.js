import React, { useState } from 'react'
import Form from '../modules/Form'
import { useRouter } from 'next/router'

const CustomerEditPage = ({data,id}) => {

    const [form ,setForm] = useState({
        name:data.name,
        lastName:data.lastName,
        email:data.email,
        phone:data.phone || "",
        address:data.address || "",
        postalCode:data.postalCode || "",
        products:data.products || "",
        date:data.date || ""
    })
    const router = useRouter()
    const cancelHandler = () =>{
        router.push("/")
    }
    const saveHandler = async() =>{
        const res = await fetch(`/api/edit/${id}`,{
            method:"PATCH",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        })
        const data = await res.json()
        if(data.status==="success"){
            router.push('/')
        }
    }
  return (
    <div className='customer-page'>
        <h4>Edit Customer</h4>
        <Form form={form} setForm={setForm}></Form>
        <div className='customer-page__buttons'>
            <button className='first' onClick={cancelHandler}>cancel</button>
            <button className='second' onClick={saveHandler}>save</button>
        </div>
    </div>
  )
}

export default CustomerEditPage