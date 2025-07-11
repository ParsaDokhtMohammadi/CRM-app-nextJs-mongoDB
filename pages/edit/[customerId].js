import CustomerEditPage from '@/components/template/CustomerEditPage'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Edit = () => {
  const [data,setData] = useState(null)
  const router = useRouter()
  const {query:{customerId} , isReady} = router
  useEffect(()=>{
    if(isReady){
      fetch(`/api/customer/${customerId}`)
      .then(res=>res.json())
      .then(data=>setData(data.data))
    }
  },[isReady])
  if (data) return (
    <div><CustomerEditPage data={data} id={customerId}></CustomerEditPage></div>
  )
}

export default Edit