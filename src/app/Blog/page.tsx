import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RxClock } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Header Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-800 hover:underline">
              Our Blogs
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Fairytails
            </p>
          </div>

          {/* Blog Cards Section */}
          <div className="flex flex-wrap -m-4 ">
            {/* Blog Card 1 */}
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
            <Image width={400} height={400} 
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                    src={"/a.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 1/once-upon-a-time-this-is-the-1st-story-for-kids'}>
                  Read More</Link>            </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/b.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails2/once-upon-a-time-this-is-the-2nd-story-for-kids'}>
                  Read More</Link>
                
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/c.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                   <Link href={'Blog/FairyTails 3/once-upon-a-time-this-is-the-3rd-story-for-kids'}>
                  Read More</Link>    
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/d.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 4/once-upon-a-time-this-is-the-4th-story-for-kids'}>
                  Read More</Link>   

                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/e.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails5/once-upon-a-time-this-is-the-fifth-story-for-kids'}>
                  Read More</Link>    
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/f.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 6/once-upon-a-time-this-is-the-6-story-for-kids'}>
                  Read More</Link>    
                  </h1>
              
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/g.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 7/once-upon-a-time-this-is-the-7-story-for-kids'}>
                  Read More</Link>    
                  </h1>
               
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/h.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 8/once-upon-a-time-this-is-the-8th-story-for-kids'}>
                  Read More</Link>    
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/i.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 9/once-upon-a-time-this-is-the-9th-story-for-kids'}>
                  Read More</Link>    
                  
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/j.jpg"}
                  alt="blog"
                />
                <div className="p-6 ">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 10/once-upon-a-time-this-is-the-10th-story-for-kids'}>
                  Read More</Link>    
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>


            {/* Blog Card 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
              <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/l.jpg"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3">
                    Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline"></h1>
                  <Link href={'Blog/FairyTails 11/once-upon-a-time-this-is-the-11th-story-for-kids'}>
                  Read More</Link>    
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 font-bold border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
                <Image width={400} height={400}
                  className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src={"/k.jpg"}
                  alt="blog"
                />
                <div className="p-6">
                  <p className="leading-relaxed mb-3">
                  Fairytails
                  </p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                  <Link href={'Blog/FairyTails 12/once-upon-a-time-this-is-the-12th-story-for-kids'}>
                  Read More</Link>    
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <RxClock className="text-lg" />
                    <span>5 Min</span>
                    <SlCalender className="text-lg" />
                    <span>
                      12<sup className="align-super text-xs">th</sup> Oct 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <h1 className="sm:text-2xl text-2xl font-medium title-font underline-offset-8 text-red-800 decoration-gray-900 hover:underline">
             <Link href={'/Blog'}> View All Posts</Link>
        
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;