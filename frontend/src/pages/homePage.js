import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from "../placeholder.svg";

import InteractiveImage from '../components/interactiveImgHome';
import StatCard from '../components/statCardHome';
import InitiativeCard from '../components/initiativeCardHome';

const HomePage = () => {
    // Parallax Handling
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const parallaxStyle = { transform: `translateY(${scrollY * 0.5}px)` };

    // Data Handling
    const stats = [
        { icon: null, number: '500+', label: 'Students' },
        { icon: null, number: '30+', label: 'Startups' },
        { icon: null, number: '20+', label: 'Mentors' },
    ];

    const initiatives = [
        {
            heading: "STARTUP SCOOP",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nulla, condimentum in iaculis porta.",
            isEnabled: true,
            link: "#",
        },
        {
            heading: "SSP",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nulla, condimentum in iaculis porta.",
            isEnabled: false,
            // link: "#",
        },
        {
            heading: "MES",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nulla, condimentum in iaculis porta.",
            isEnabled: true,
            link: "#",
        },
    ];


    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            {/* // Navbar */}

            <main>
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
                    {/* Starry Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')]" style={parallaxStyle}></div>
                    </div>

                    {/* Hero Container */}
                    <div className="container mx-auto px-32 py-32 relative z-10">
                        <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                    WELCOME TO E&#8209;CELL MIT
                                </h1>

                                <p className="text-xl text-gray-300 mb-8">
                                    Fostering innovation and entrepreneurship in the student community. Join us to explore opportunities and experience the world of startups. A brief description about the opportunities and what they will get to experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nulla, condimentum in iaculis porta.
                                </p>

                                <Link
                                    to=""
                                    target="_blank"
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-colors">
                                    Know More
                                </Link>
                            </div>

                            {/* Hero 3d effect Image */}
                            <div className="relative aspect-square w-full max-w-md mx-auto">
                                <InteractiveImage
                                    source={logo}
                                    alt="E-Cell MIT Manipal Logo"
                                    className="w-full h-full object-contain rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="py-24 bg-gray-900">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="text-3xl font-bold mb-12 text-center">Results that matter</h2>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <StatCard key={index} number={stat.number} label={stat.label} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Initiatives Section */}
                <section className="py-32 bg-gray-900 border-t border-gray-600">
                    <div className="container mx-auto px-32">
                        <h2 className="text-4xl font-bold mb-12 text-center">OUR INITIATIVES</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {initiatives.map((initiative, index) => (
                                <InitiativeCard key={index} heading={initiative.heading} description={initiative.description} isEnabled={initiative.isEnabled} link={initiative.link} />
                            ))}
                        </div>
                    </div>
                </section>

                
            </main>

            {/* // Footer */}
        </div>
    );
}

export default HomePage;