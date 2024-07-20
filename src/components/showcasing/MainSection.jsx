import React, { useState, useRef, useEffect } from 'react';
import styles from './MainSection.module.scss'
import Link from 'next/link';
import { config } from '@/config';
import ParallaxGallery from '../parallax/ParallaxGallery';
import Image from 'next/image';

const MainSection = ({isHidden, heroHeadLine, highlightedHeadlineWords, breakLineAfter, heroImageUrl, parallaxEffect, parallaxImages}) => {
    
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
            container.addEventListener('touchstart', handleMouseMove);
            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.addEventListener('touchend', handleMouseMove);
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
                    {parallaxEffect && <ParallaxGallery images={parallaxImages} hoverPosition={hoverPosition} /> }
                    {!parallaxEffect && <Image src={heroImageUrl} width={600} height={450}/>}
                </div>
            </div>
        </div>
    );
};

export default MainSection;