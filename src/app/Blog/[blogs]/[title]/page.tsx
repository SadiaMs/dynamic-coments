import Image from 'next/image';
import React from 'react';

// Define the types for the props
interface BlogPageProps {
  params: {
    blogs: string;
    title: string;
  };
}

// Define the dynamic paths (equivalent to `getStaticPaths` in the App Router)
export const generateStaticParams = async () => {
  // Assuming you have a list of blog slugs (this can be fetched from a database or API)
  const paths = [
    { blogs: 'example-blog', title: 'My First Blog' },
    { blogs: 'second-blog', title: 'Second Blog Post' },
  ];

  return paths.map((path) => ({
    params: path,
  }));
};

const BlogPage = ({ params }: BlogPageProps) => {
  const { blogs, title } = params;

  // Convert blog slug to lowercase for image path
  const blogSlug = blogs.toLowerCase();
  const imagePath = `/${blogSlug}.jpg`;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">{title}</h1>
      <Image
        src={imagePath}
        alt={`Image for ${title}`}
        width={600}
        height={400}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform"
      />
      <p className="text-lg text-gray-700 mt-4">
        This is the blog content for <strong>{blogs}</strong> with the title <strong>{title}</strong>.
      </p>
    </div>
  );
};

export default BlogPage;
