"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [comments, setComments] = useState<string[]>([]); // State to store comments
  const [newComment, setNewComment] = useState<string>(""); // State for new comment input

  // Function to handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment.trim()]);
      setNewComment(""); // Clear input after adding
    }
  };

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl text-red-800 lg:text-5xl font-bold text-dark dark:text-light">
        <b> Bedtime Stories: </b>
      </h1>
      <h1 className="text-xl xs:text-3xl text-red-400 lg:text-5xl font-bold text-dark dark:text-light cursor-pointer">
        Kids Motivational Stories |
      </h1>
      <h1 className="text-xl xs:text-3xl text-purple-800 lg:text-5xl font-bold text-dark dark:text-light cursor-pointer">
        By Sadia Siddique
      </h1>

      {/* Featured Image */}
      <Image
        src={"/css.jpg"}
        width={500}
        height={500}
        alt="AI for everyone"
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl text-red-800 xs:text-2xl mb-9 md:text-3xl font-bold uppercase text-accentDark Primary cursor-pointer">
          Introduction to Bedtime Fairy Tales
        </h2>
        <p className="text-base md:text-xl mb-8 leading-relaxed text-justify text-dark/80 dark:text-light/80">
          Bedtime fairy tales have been cherished for generations...
        </p>
      </section>

      {/* Author Section */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={"/a.jpg"}
          width={200}
          height={200}
          alt="author"
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-red-800 font-bold text-dark dark:text-light cursor-pointer">
            The Enchanted Forest:
          </h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
          Once upon a time, in a faraway kingdom, there was a magical forest known as the Enchanted Woods. The forest was unlike any other, filled with glowing flowers, trees that whispered secrets, and streams that sang lullabies. It was said that whoever ventured deep into the forest could make a wish, and the forest spirits would grant it. But only those with a pure heart could find their way to the heart of the woods.
          </p>
        </div>
      </section>

      {/* Blog Body */}
      <h2 className="text-xl text-red-800 font-bold text-dark dark:text-light cursor-pointer">
      Introduction to Bedtime Fairy Tales
      </h2>
      <p className="text-lg leading-normal text-dark/80 dark:text-light/80">
      Bedtime fairy tales have been cherished for generations, weaving magic into the hearts of children and adults alike. These stories transport listeners to enchanted worlds filled with brave heroes, magical creatures, and life lessons wrapped in wonder. They spark imagination, nurture creativity, and often leave us with a sense of hope and inspiration.

Fairy tales are more than just stories—they are a bridge to dreams, a gentle guide that helps young minds explore the values of kindness, courage, and resilience. Whether it’s the tale of a clever fox, a brave little girl, or a mystical forest, each story brings with it the promise of adventure and the warmth of a happy ending.

As the stars twinkle in the night sky, bedtime fairy tales offer a moment of connection, where loved ones come together to share in the joy of storytelling. So, snuggle in, let your imagination take flight, and get ready to enter a world where anything is possible. 🌙✨
      </p>

      {/* Comments Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-dark dark:text-light">Comments</h2>
        {/* Add Comment Input */}
        <div className="mt-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-3 border rounded-lg text-dark dark:text-light dark:bg-red-50"
            rows={3}
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-4 px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-purple-800"
          >
            Submit Comment
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-8">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="p-4 mb-4 border rounded-lg bg-gray-100 dark:bg-purple-100 text-dark dark:text-light"
              >
                {comment}
              </div>
            ))
          ) : (
            <p className="text-dark/60 dark:text-light/60">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </section>
    </article>
  );
}
