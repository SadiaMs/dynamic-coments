import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxClock } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";

// Blog data array
const blogs = [
  {
    id: 1,
    title: "Rapunzel Series: Episode 1",
    description: "In the heart of her magical tower, Rapunzel was learning more about the world and herself with every passing day...",
    image: "/a.jpg",
    link: "/blog/rapunzel-series-1",
    readTime: "5 Min",
    date: "12th Oct 2022",
  },
  {
    id: 2,
    title: "Storytail: Episode 2",
    description: "Today, Rapunzel would face a challenge that would teach her one of the most important lessons of all—believing in herself.",
    image: "/b.jpg",
    link: "/blog/storytail-episode-2",
    readTime: "5 Min",
    date: "12th Oct 2022",
  },
  // Add more blog objects here...
];

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
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fairytales</p>
          </div>

          {/* Blog Cards Section */}
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-red-800 border-opacity-60 rounded-lg overflow-hidden hover:bg-[#ddeac3]">
                  <Image
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover object-center mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                    src={blog.image}
                    alt={blog.title}
                  />
                  <div className="p-6">
                    <p className="leading-relaxed mb-3">{blog.description}</p>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 hover:underline">
                      <Link href={"/Blog"}>Read More</Link>
                    </h1>
                    <div className="flex items-center text-gray-600 text-sm space-x-2">
                      <RxClock className="text-lg" />
                      <span>{blog.readTime}</span>
                      <SlCalender className="text-lg" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
