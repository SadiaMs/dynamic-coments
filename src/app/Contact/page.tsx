import { Poppins } from 'next/font/google';

import React from 'react';
import About from '../About/page';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Contact = () => {
    return (
        <div className={`${poppins.className}`}>
            {/* Banner Section */}
        <About />

            {/* Form Section */}
            <div className="flex items-center justify-center min-h-screen bg-purple-100">
                <form className="w-[90vw] md:w-[40vw] bg-white p-8 shadow-lg rounded-lg flex flex-col gap-5">
                    <div>
                        <label htmlFor="name" className="block text-[16px] font-bold text-purple-800 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-4 border border-blue-400 text-purple-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-[16px] font-bold text-purple-800 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-[16px] text-purple-800 font-bold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="This is optional"
                            className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-[16px] font-bold text-purple-800 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Hi! I’d like to ask about..."
                            className="w-full p-4 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-800 w-full text-white text-[16px] font-medium py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
