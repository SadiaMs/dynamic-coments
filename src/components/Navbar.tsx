import Link from 'next/link'
import React from 'react'
import { FcCellPhone, FcCloseUpMode, FcHome } from 'react-icons/fc'



const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
      <div className="container bg-[#0000000] mx-auto flex flex-wrap w-[95%] 2xl:w-[100%] p-5 flex-col md:flex-row items-center">
        {/* Navigation Links */}
        <nav className="md:ml-auto font-bold text-red-700 md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <Link href={"/"} className="mr-5 hover:text-purple-600">Home</Link>
          <Link href={"/Blog"} className="mr-5 hover:text-purple-600">Blog</Link>
          <Link href={"/About"} className="mr-5 hover:text-purple-600">About</Link>
          <Link href={"/Contact"} className="mr-5 hover:text-purple-600">Contact</Link>
        </nav>

        {/* Icon Section */}
        <div className="flex items-center text-xl space-x-4">
          <FcHome className="hover:text-gray-900 cursor-pointer" />
          <FcCloseUpMode className="hover:text-gray-900 cursor-pointer" />
          <FcCellPhone className="hover:text-gray-900 cursor-pointer" />
   
          
        </div>
       
      </div>
    </header>
  
      
    </div>
  )
}

export default Navbar
