import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <div>
    <Navbar/>
    <section className="bg-blue-mid overflow-hidden">
    <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-[50vh] flex flex-col justify-center">

        {/* Image Cards */}
        <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&auto=format&fit=crop"
              alt="First"
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&auto=format&fit=crop"
              alt="Second"
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&auto=format&fit=crop"
              alt="Third"
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&auto=format&fit=crop"
              alt="Fourth"
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
        </div>

        {/* Tutorial Links */}
        
      </div>
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-[50vh] flex flex-col justify-center">

{/* Image Cards */}
<div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&auto=format&fit=crop"
      alt="First"
      className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&auto=format&fit=crop"
      alt="Second"
      className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&auto=format&fit=crop"
      alt="Third"
      className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    />
  </a>
  <a href="#_">
    <img
      src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&auto=format&fit=crop"
      alt="Fourth"
      className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
    />
  </a>
</div>

{/* Tutorial Links */}

</div>
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-50vh flex flex-col justify-center">
        {/* Image Cards */}
        <div className="flex flex-col sm:flex-row mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&auto=format&fit=crop"
              alt="First"
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&auto=format&fit=crop"
              alt="Second"
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&auto=format&fit=crop"
              alt="Third"
              className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
          <a href="#_">
            <img
              src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&auto=format&fit=crop"
              alt="Fourth"
              className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
            />
          </a>
        </div>

        {/* Tutorial Links */}
        
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default BlogPage;
