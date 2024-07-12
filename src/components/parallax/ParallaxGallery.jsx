'use client';
import React from 'react';
import './ParallaxGallery.css';

const ParallaxGallery = ({ images, hoverPosition }) => {
    return (
        <div className="parallax-container">
            {images.map((imageName, index) => (
                <div
                    key={imageName}
                    className="parallax-layer"
                    style={{
                        transform: `translate(
                            ${(hoverPosition.x - 0.5) * (index + 1) * 20}px,
                            ${(hoverPosition.y - 0.5) * (index + 1) * 20}px
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
    );
};

export default ParallaxGallery;