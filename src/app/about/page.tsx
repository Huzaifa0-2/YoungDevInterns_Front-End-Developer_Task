import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div>
        <h1>Welcome to My SPA!</h1>
        <Link href="/contact">
            Contact
        </Link>
    </div>
  )
}

export default about


  
  