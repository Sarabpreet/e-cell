import React from 'react';

const InitiativeCard = ({ heading, description }) => {
    return (
        <div className="bg-gradient-to-br from-blue-dark to-blue-mid bg-opacity-20 p-6 sm:p-8 rounded-2xl border border-blue-light border-opacity-10 backdrop-blur-sm flex flex-col h-full w-full max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{heading}</h3>
            <p className="text-blue-pale mb-4 flex-grow text-left">{description}</p>
        </div>
    );
}

export default InitiativeCard;