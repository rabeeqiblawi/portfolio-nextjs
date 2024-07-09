'use client'

import React, { useState, useEffect } from 'react';
import './ScrollToTopArrow.scss'; // Import the styles
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <span><IoIosArrowUp /></span>
                </div>
            )}
        </div>
    );
};

export default ScrollToTopArrow;
