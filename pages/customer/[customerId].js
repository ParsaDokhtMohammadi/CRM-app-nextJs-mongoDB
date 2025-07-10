import { useRouter } from 'next/router'
import React, { useState } from 'react'

const index = () => {
    const [data , setData] = useState(null)
    const router = useRouter()
    const {query:{customerId},isReady} = router
    
  return (
    <div>index</div>
  )
}

export default index