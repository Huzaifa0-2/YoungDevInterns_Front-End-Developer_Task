import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="mt-8 mb-16">
        <ul className="flex justify-center space-x-8">
        <Link href={"/"}>
            <li className="font-semibold hover:text-gray-400 cursor-pointer">Home</li>
        </Link>
        <Link href={"/api/post"}>
            <li className="font-semibold hover:text-gray-400 cursor-pointer">Posts</li>
        </Link>
        <Link href={"/about"}>
            <li className="font-semibold hover:text-gray-400 cursor-pointer">About</li>
        </Link>
        <Link href={"/contact"}>
            <li className="font-semibold hover:text-gray-400 cursor-pointer">Contact</li>
        </Link>
        </ul>
    </nav>
  ) 
}

export default Navbar