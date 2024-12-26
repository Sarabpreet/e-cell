import React from "react";

export const BlogCard = ({ imageLink, title, description, postURL }) => {
    return (
        <a
            href={postURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-blue-dark rounded-lg overflow-hidden shadow-lg transition-all will-change-transform duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl hover:shadow-white hover:border-4 hover:border-white"
        >
            {/* Image */}
            <img
                src={imageLink}
                alt={title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-6">
                <h2 className="text-xl text-left font-semibold text-white mb-2">{title}</h2>

                {/* Description Section */}
                {description && (
                    <p className="text-sm text-gray-300 mb-4">{description}</p>
                )}

                {/* "View More" Button */}
                <div className="mt-4 flex justify-center">
                    <div
                        className="flex items-center justify-center px-4 py-2 bg-blue-mid hover:bg-blue-light text-white rounded-md transition-colors duration-200 shadow-md"
                    >
                        {/* Eye Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 mr-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12A3 3 0 119 12a3 3 0 016 0zm9 0c0 3.866-6 7-9 7S3 15.866 3 12s6-7 9-7 9 3.134 9 7z"
                            />
                        </svg>
                        View More
                    </div>
                </div>
            </div>
        </a>
    );
};


     


export const BlogList = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <BlogCard 
                    key={index} 
                    title={post.title} 
                    imageLink={post.image} 
                    description={post.description} // Ensure description is passed here
                    postURL={post.postURL} 
                />
            ))}
        </div>
    );
};
