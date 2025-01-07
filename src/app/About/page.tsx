import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const About = () => (
    <div className={`${poppins.className} relative`}>
        {/* Background Image */}
        <div className="relative w-full md:h-screen h-[60vh]">
            <Image
                src="/about.jpg"
                alt="Main Banner"
                fill
                className="object-cover" />
        </div>

        {/* Content Box */}
        <div className="h-[443px] md:w-[643px] w-[90vw] mx-auto flex flex-col justify-between bg-[#FFF3E3] md:p-10 p-6 rounded-[10px] ml-4 md:ml-0 absolute top-1/2 md:right-10 transform -translate-y-1/2">
            <p className="text-[16px]  font-semibold">Join us</p>

            <h1 className="md:text-[52px]  text-[39px]  hover:text-purple-600 font-bold text-red-800 hover:underline">
                About Us <br /></h1>
                <h1 className="md:text-[52px]  text-[39px] font-bold text-[#cb9d9c]">
            </h1>
            <p className="text-[18px] font-medium text-[#333333]">
            Welcome to the magical world of fairytales! Here, imagination takes flight, and every story has a sprinkle of wonder.
            </p>

            <button className="text-[16px] font-bold bg-purple-800 rounded-3xl text-white px-[72px] w-fit py-[15px] hover:text-white hover:bg-red-800">
                Read NOW
            </button>
        </div>
    </div>
);


export default About