import React from 'react'
import Link from 'next/link'

const posts = () => {
  return (
    <div>
        <h1>JSONPlaceholder's API</h1>
        <Link href="/api/post">
            View all Posts
        </Link>
    </div>
  )
}

export default posts 
  