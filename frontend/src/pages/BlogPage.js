import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogList } from "../components/blogCard";
import { BlogData } from "../assets/blogData";

const BlogPage = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />

      <main>
        <section className="py-12 bg-gradient-to-br from-blue-dark via-blue-mid to-blue-light">
          <div className="container mx-auto px-4 md:px-10 lg:px-16">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-blue-pale">Latest Startup Scoops</h1>
            </header>

            <BlogList posts={BlogData} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>  
  );
};

export default BlogPage;
