import React from 'react';

const StatCard = ({ icon: Icon, number, label }) => {
    return (
        <div className="bg-blue-mid bg-opacity-25 backdrop-blur-sm rounded-2xl p-8 border border-blue-light border-opacity-10 transform transition-all hover:scale-105">
            <h3 className="text-4xl font-bold text-blue-light mb-2">{number}</h3>
            <p className="text-blue-pale">{label}</p>
        </div>
    );
}

export default StatCard;