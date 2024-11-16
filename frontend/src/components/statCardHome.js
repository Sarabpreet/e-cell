import React from 'react';

const StatCard = ({ icon: Icon, number, label }) => {
    return (
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 transform transition-all hover:scale-105">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">{number}</h3>
            <p className="text-gray-300">{label}</p>
        </div>
    );
}

export default StatCard;