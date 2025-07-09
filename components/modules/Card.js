import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Card = ({customer}) => {
    const router = useRouter()
    const deleteHandler = async()=>{
        const res = await fetch(`/api/delete/${customer._id}`,{
            method:"DELETE"
        })
        const data = await res.json()
        if (data.status==="success"){
            router.reload()
        }
    }
    return (
    <div className='card'>
        <div className='card__details'>
            <p>
                {customer.name} {customer.lastName}
            </p>
            <p>{customer.email}</p>
        </div>
        <div className='card__buttons'>
            <button onClick={()=>deleteHandler(customer._id)}>Delete</button>
            <Link href={`/edit/${customer._id}`}>edit</Link>
            <Link href={`/customer/${customer._id}`}>details</Link>
        </div>
    </div>
  )
}

export default Card