'use client';
import React, { useState, useEffect } from 'react';
import './ParallaxGallery.css';

const ParallaxGallery = ({ images }) => {
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        console.log(images);
    }, []);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        setHoverPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setHoverPosition({ x: 0, y: 0 });
    };

    return (
        <div 
         
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="parallax-container">
                {images.map((imageName, index) => (
                    <div
                        key={imageName}
                        className="parallax-layer"
                        style={{
                            transform: `translate(
                                ${hoverPosition.x * (index + 1) * 10}px,
                                ${hoverPosition.y * (index + 1) * 10}px
                            )`,
                            zIndex: index,
                        }}
                    >
                        <img
                            src={`${imageName}`}
                            alt={`Layer ${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParallaxGallery;