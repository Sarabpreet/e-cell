import React from 'react';

const StatCard = ({ icon: Icon, number, label }) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg"></div>
            <div>
                <p className="text-4xl font-semibold text-blue-600">{number}</p>
                <p className="text-lg text-gray-600">{label}</p>
            </div>
        </div>
    );
}

export default StatCard;