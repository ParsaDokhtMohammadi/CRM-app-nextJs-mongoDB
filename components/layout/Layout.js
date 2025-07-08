import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <header className='header'>
            <h2>MyCRM</h2>
            <Link href={"/addCustomer"}>add customer</Link>
        </header>
        <div className='main'>
            {children}
        </div>
        <footer className='footer'>
            <a href='https://github.com/ParsaDokhtMohammadi/CRM-app-nextJs-mongoDB' target='_blank' rel='noreferrer' >PDM</a> nextJs CRM project &copy;
        </footer>
    </>
  )
}

export default Layout