import React from "react";

export const BlogCard = ({ imageLink, title, postURL }) => {
    return (
        <a href={postURL} target="_blank" rel="noopener noreferrer" className="group block">
         <div className="bg-blue-dark rounded-lg overflow-hidden shadow-lg transition-all will-change-transform duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl hover:shadow-white hover:border-4 hover:border-white">

                <img src={imageLink} alt={title} width={400} height={200} className="w-full h-48 object-cover" />

                <div className="p-6">
                    <h2 className="text-xl text-left font-semibold text-white mb-2">{title}</h2>

                    <div className="flex items-center mt-4">
                        <img src="https://picsum.photos/40" alt="E-Cell Logo" width={40} height={40} className="w-8 h-8 rounded-full mr-2" />
                        {/* TODO: to be replaced with logo */}

                        <span className="text-sm text-blue-pale">E-Cell MIT Manipal</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export const BlogList = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <BlogCard key={index} title={post.title} imageLink={post.image} postURL={post.postURL} />
            ))}
        </div>
    )
}