import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Linkdin = () => {
  return (
    <div>
      <div className='w-[76px] h-[416] top-[246px] left-[99px]'>
        <Image height={100} width={100}
          src={"/Rectangle 16.png"} 
          alt="google logo"
          className="object-cover w-full h-full rounded-full"
        />
        <div className="flex justify-center items-center"></div>
      </div>
      <section className="bg-red-50 w-full h-[450px] text-gray-600 body-font flex items-center justify-center relative font-poppins">
     
       

        {/* Content Overlay */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative z-10">
          {/* Heading */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-red-800 mb-4 hover:underline hover:cursor-pointer">
             Youtube Channel
            </h1>
            {/* Paragraph */}
            <p className="mb-8 leading-relaxed text-lg">
            Favorite Kids Author — Join renowned author and creative storyteller Michelle Adam for online storytelling class. Learn how to write and preform engaging stories to teach kids about Mother Earth. View Events. See Projects. Meet Our Team. Highlights: Events Available, Newsletter Available.
            </p>

            {/* Follow Button */}
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded-full shadow-md hover:shadow-lg text-lg">
              <Link href={'www.youtube.com/@MiniMelodies_World'}> Youtube</Link> 
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Linkdin;