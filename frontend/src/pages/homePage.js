import React from 'react';
import logo from '../logo.svg';
import InteractiveImage from '../components/interactiveImgHome';

const HomePage = () => {
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
        </div>
    );
}

export default HomePage;