
import Blog2 from '@/app/Blog2/page';

import React from 'react';


const Details = () => {
  return (
    <div>
      <section className=" bg-green-50 text-gray-600 body-font">
        <div><Blog2 /> </div>
        <div className="container bg-[FAF4F4] px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            {/* Free Delivery */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
               
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-bold text-red-800 mb-3">Fairy tale</h1>
                  <p className="leading-relaxed mb-5">
                  A fairy tale is a short story that belongs to the folklore genre. Such stories typically feature magic, enchantments, and mythical or fanciful beings.
                  </p>
                </div>
              </div>
            </div>

            {/* 90 Days Return */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-bold text-red-800 mb-3">Rhymes</h1>
                  <p className="leading-relaxed mb-5">
                  A rhyme is a repetition of similar sounds (usually the exact same phonemes) in the final stressed syllables and any following syllables of two or more words. Most often, this kind of rhyming (perfect rhyming) is consciously used for a musical or aesthetic effect in the final position of lines within poems or songs.</p>
                </div>
              </div>
            </div>

            {/* Secure Payment */}
            <div className="py-8 px-4 lg:w-1/3">
              <div className="h-full flex items-start">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            
                </div>
                <div className="flex-grow pl-6">
                  <h1 className="title-font text-xl font-bold  text-red-800 mb-3">Cartoon</h1>
                  <p className="leading-relaxed mb-5">
                  A cartoon is a type of visual art that is typically drawn, frequently animated, in an unrealistic or semi-realistic style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;