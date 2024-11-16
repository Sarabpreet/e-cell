import React from 'react';

const InitiativeCard = ({ heading, description, isEnabled, link, backgroundColor }) => {
    return (
        <div className="bg-gradient-to-br from-purple-900 to-blue-900 bg-opacity-20 p-8 rounded-2xl border border-white border-opacity-10 backdrop-blur-sm transform transition-all hover:scale-105 hover:rotate-2">
            <h3 className="text-2xl font-bold mb-4">{heading}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            {isEnabled ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
                    Know More
                </a>
            ) : (
                <span
                role="button"
                className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors cursor-not-allowed">
                    Coming Soon
                </span>
            )}
        </div>
    );
}

export default InitiativeCard;