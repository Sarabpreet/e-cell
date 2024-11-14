import React from 'react';
import logo from '../logo.svg';
import InteractiveImage from '../components/interactiveImgHome';
import StatCard from '../components/statCardHome';

const HomePage = () => {
    const stats = [
        { icon: null, number: '500+', label: 'Students' },
        { icon: null, number: '30+', label: 'Startups' },
        { icon: null, number: '20+', label: 'Mentors' },
    ];

    return (
        <div>
            <section className='flex flex-col-reverse lg:flex-row items-center
            bg-gray-100
            h-screen w-screen p-8 lg:p-16'>
                <div className="flex-1 lg:pr-8 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Welcome to E-Cell MIT
                    </h1>
                    <p className="text-gray-700 text-lg mb-6">
                        A brief description about the opportunities and what they will get to experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tellus nulla, condimentum in iaculis porta.
                    </p>
                    <a href="#join-us" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300">
                        Know More
                    </a>
                </div>

                <div className="flex-1 h-auto w-full flex justify-center mb-8 lg:mb-0">
                    <InteractiveImage
                        source={logo}
                        alt="logo"
                        className={"transition-transform duration-100 ease-out"}
                    />
                </div>
            </section>

            <section className="container bg-gray-100 py-8  mx-auto px-4 text-center h-auto md:h-64 w-screen">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Results that matter</h2>

                <div className="flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0">
                    {stats.map((stat, index) => (
                        <StatCard key={index} number={stat.number} label={stat.label} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;