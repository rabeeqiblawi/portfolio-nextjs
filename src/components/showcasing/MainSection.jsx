import React, { useState, useRef, useEffect } from 'react';
import styles from './MainSection.module.scss'
import Link from 'next/link';
import { config } from '@/config';
import ParallaxGallery from '../parallax/ParallaxGallery';

const MainSection = () => {
    const { heroHeadLine, highlightedHeadlineWords, breakLineAfter } = config.content.hero;
    const images = [
        'parallax-effect/0.png',
        'parallax-effect/1.png',
        'parallax-effect/2.png',
        'parallax-effect/3.png',
        'parallax-effect/4.png',
    ];

    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;
            setHoverPosition({ x, y });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1>
                        {heroHeadLine.split(' ').map((word, index) => (
                            <React.Fragment key={index}>
                                {highlightedHeadlineWords.includes(word) ?
                                    <span>{word}</span>
                                    : ` ${word} `
                                }
                                {breakLineAfter.includes(word) && <br />}
                            </React.Fragment>
                        ))}
                    </h1>
                    <div className={styles.line}></div>
                    <Link href="/services">Services</Link>
                </div>
                <div className={styles.imgContainer}>
                    <ParallaxGallery images={images} hoverPosition={hoverPosition} />
                </div>
            </div>
        </div>
    );
};

export default MainSection;