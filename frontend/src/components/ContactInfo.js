import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../assets/mesData';

export default function ContactInfo() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-purple-400 mb-4">Contact Us</h2>
          <p className="text-[#22d3ee] text-lg">Get in Touch with Our Team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coordinators */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Event Coordinators</h3>
            {CONTACT_INFO.coordinators.map((coordinator) => (
              <div 
                key={coordinator.name}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {coordinator.name}
                </h4>
                <div className="space-y-2 text-gray-300">
                  <a 
                    href={`tel:${coordinator.phone}`}
                    className="flex items-center gap-2 hover:text-[#22d3ee] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {coordinator.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Location */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Location</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors">
              <a 
                href={CONTACT_INFO.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-4"
              >
                <div className="aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Map Preview
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#22d3ee] mt-1" />
                  <div>
                    <p className="font-semibold text-white">{CONTACT_INFO.location.name}</p>
                    <p>{CONTACT_INFO.location.address}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

