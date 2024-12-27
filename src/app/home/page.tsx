import React from 'react'
import Link from 'next/link'

const home = () => {
  return (
    <div>
        <h1>Welcome to My SPA!</h1>
        <Link href="/about">
            About
        </Link>
    </div>
  )
}

export default home


  
  