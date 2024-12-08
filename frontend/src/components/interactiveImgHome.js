import React, { useEffect, useState } from 'react';

const InteractiveImage = ({ source, alt, className }) => {
    const [transform, setTransform] = useState("translateZ(0)");

    const handleMouseMove = (e) => {
        const { offsetWidth, offsetHeight } = e.currentTarget;
        const { offsetX, offsetY } = e.nativeEvent;

        const rotateX = ((offsetY - offsetHeight / 2) / offsetHeight * 20);
        const rotateY = ((offsetX - offsetWidth / 2) / offsetWidth * -20);

        setTransform(`perspective(1000px) translateZ(-20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }

    const handleMouseLeave = () => setTransform('translateZ(0)');

    return (<img
        src={source}
        alt={alt}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transform }}
    />);
}

export default InteractiveImage;