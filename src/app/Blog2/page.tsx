import Image from 'next/image';
import Link from 'next/link';

import React from 'react';


const Blog2 = () => {
  return (
    <div>
      <section className="text-red-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl  font-bold text-2xl  title-font mb-4 text-red-800 hover:underline">
           
The Series
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The kids Stories series provides fun, adventure, and relatable lessons for children. In  our fast-paced, stressful, and often chaotic world, this series provides kids a respite that will take them to a place of safety, goodness, and kindness in order to connect their hearts with their heads, enabling them to develop their own self-esteem and character, along with positive relationships with others.

.
            </p>
          </div>

          {/* Blog Cards Section */}
          <div className="flex flex-wrap -m-4 ">
            {/* Blog Card 1 */}
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/css.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed font-bold mb-3">
                  Rapunzel 
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline cursor-pointer">
                  <Link href='/Blog'> Read More</Link>
                  </h1>
                  
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/two.jpg"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed font-bold mb-3">
                    Modern interior trends to try now.
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline cursor-pointer">
                   <Link href='/Blog'> Read More</Link>
                  </h1>
                 
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 font-bold border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
                <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/three.jpg"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3">
                    Embracing sustainability in design.
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline cursor-pointer">
                  <Link href='/Blog'> Read More</Link>
                  </h1>
                 
                </div>
              </div>
            </div>
        
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog2;