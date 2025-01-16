import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Events from "../components/Events"
import Speakers from "../components/Speakers";
import VentureCapitalists from "../components/VentureCapitalists";
import ContactInfo from "../components/ContactInfo";
import MovingBackground from "../components/MovingBackground";
import LightEffects from "../components/LightEffects";
import Timeline from "../components/Timeline";
import VideoSection from "../components/VideoSection";
import Payment from "../components/Payment";

const Mes = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white overflow-x-hidden">
      <MovingBackground />
      <LightEffects />
      <Navbar />
      <Hero />
      <VideoSection />
      <Events />
      <Speakers />
    <Timeline />
      <Footer />
    </div>
  );
}

export default Mes;