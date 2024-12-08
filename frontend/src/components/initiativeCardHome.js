import React from 'react';

const InitiativeCard = ({ heading, description, isEnabled, link }) => {
    return (
        <div className="bg-gradient-to-br from-blue-dark to-blue-mid bg-opacity-20 p-6 sm:p-8 rounded-2xl border border-blue-light border-opacity-10 backdrop-blur-sm flex flex-col h-full w-screen">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{heading}</h3>
            <p className="text-blue-pale mb-4 flex-grow">{description}</p>
            {isEnabled ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-blue-light text-white px-4 py-2 rounded-md hover:bg-blue-light hover:text-blue-dark transition-colors text-center w-full sm:w-auto">
                    Know More
                </a>
            ) : (
                <span
                role="button"
                className="inline-block border border-blue-light text-white px-4 py-2 rounded-md hover:bg-blue-light hover:text-blue-dark transition-colors cursor-not-allowed text-center w-full sm:w-auto">
                    Coming Soon
                </span>
            )}
        </div>
    );
}

export default InitiativeCard;