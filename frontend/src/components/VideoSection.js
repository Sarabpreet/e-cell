import React from 'react';

const VideoSection = () => {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black/50">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl mb-8 text-white tracking-wider font-bold" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.7)' }}>
            A GLIMPSE INTO THE PAST
          </h2>
          <div className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-12">
            MES &apos;25
          </div>
          
          <button className="mt-8 flex items-center gap-2 mx-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-colors text-lg">
            <span>▶</span>
            Watch Highlights
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

