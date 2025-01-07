import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })
const Hero = () => {
    return (
        <div className={`${poppins.className} relative`}>
            {/* Background Image */}
            <div className="relative w-full md:h-screen h-[80vh]">
                <Image
                    src="/bg.jpg"
                    alt="Main Banner"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Box */}
            <div className="h-[443px] md:w-[643px] w-[90vw] mx-auto flex flex-col justify-between bg-[#FFF3E3] md:p-10 p-6 rounded-[10px] ml-4 md:ml-0 absolute top-1/2 md:right-10 transform -translate-y-1/2">
                <p className="text-[16px] text-red-700 font-semibold">Fairytals</p>
                <h1 className="md:text-[52px] text-[39px] font-bold text-[#ca322f] cursor-pointer hover:underline">
                    Bedtime Stories <br />
                    Rapunzel Series:
                </h1>
                <p className="text-[18px] font-medium text-[#196f3d]">
                Once upon a time, in a kingdom far, far away, a girl named Rapunzel lived in a tall, magical tower.
                </p>

                <button className="text-[16px] font-bold rounded-xl bg-[#602ad4] text-white px-[72px] w-fit py-[15px] hover:bg-red-800 cursor-pointer">
                   Read Now
                </button>
            </div>
        </div>
    );
};


export default Hero