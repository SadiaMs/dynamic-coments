import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      

      <footer className="bg-red-100  text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className=" text-red-800 text-sm md:text-base">&copy; 2025 Fairytails. <b>Sadia Siddique </b> All Rights Reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li>
              <Link href={"/"} className="text-purple-800 font-bold hover:text-red-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href={"/Blog"} className="text-purple-800 font-bold hover:text-red-400">
                Terms of Service
              </a>
            </li>
            <li>
              <Link href={"/Contact"} className=" text-purple-800 font-bold hover:text-red-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer