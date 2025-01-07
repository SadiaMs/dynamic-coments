import { Poppins } from 'next/font/google';

import React from 'react';

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Bee = () => {
  return (
    <div className={`${poppins.className} md:h-[270px] gap-5 md:py-0 py-10 flex justify-center items-center bg-[#FAF3EA] mt-20 md:mt-10`}>

      <div className="max-w-screen-xl mx-auto md:px-0 px-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {/* Feature Item */}
          <div className="flex items-center gap-5">
           
            <div>
              <h1 className="md:text-[22px] text-[18px]  font-semibold text-red-800">High Quality</h1>
              <p className="md:text-[16px] text-[12px] font-medium text-[#898989]">
              Discover the best positive affirmation children books, by the LIE Foundation. Loyalty In Everything is a dedicated nonprofit, building better futures. Explore Gallery. Read Blog. Meet Our Team.
              </p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-center rounded gap-5">
            
            <div>
              <h1 className="md:text-[22px] text-[18px] font-semibold text-red-800">
              Storytelling
              </h1>
              <p className="md:text-[16px] text-[12px] font-medium text-[#898989]">Storytelling serves as a powerful tool for education, transcending traditional classrooms. It’s a dynamic means of imparting knowledge, fostering creativity, and instilling valuable lessons in children.</p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-center gap-5">
           
            <div>
              <h1 className="md:text-[22px] text-[18px] font-semibold text-red-800">Daily Stories</h1>
              <p className="md:text-[16px] text-[12px] font-medium text-[#898989]">
              Storytelling is a way to live in a world of imagination—and it requires no materials! Storytelling for children is play-based learning at its best and brings the community together.
              </p>
            </div>
          </div>

          {/* Feature Item */}
          <div className="flex items-center gap-5">
            
            <div>
              <h1 className="md:text-[22px] text-[18px] font-semibold text-red-800"> ChildsPlay</h1>
              <p className="md:text-[16px] text-[12px] font-medium text-[#898989]">
              When ChildsPlay International records local stories, it ensures that local people are involved and that the methods of recording and transcribing are reproducible at the local level. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bee;