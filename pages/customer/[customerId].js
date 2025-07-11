import CustomerDetailsPage from '@/components/template/CustomerDetailsPage'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [data, setData] = useState(null)
    const router = useRouter()
    const { query: { customerId }, isReady } = router
    useEffect(() => {
        if (isReady) {
            fetch(`/api/customer/${customerId}`)
                .then(res => res.json())
                .then(data => setData(data.data))
        }
    }, [isReady])

    if (data) return (
        <CustomerDetailsPage data={data}></CustomerDetailsPage>
    )
}

export default index