import React from 'react';
import styles from './MainSection.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/config';

const MainSection = () => {
    const { heroHeadLine, highlightedHeadlineWords, breakLineAfter } = config.content.hero;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1>
                        {heroHeadLine.split(' ').map((word, index) => (
                            <React.Fragment key={index}>
                                {highlightedHeadlineWords.includes(word) ?
                                    <span>{word}</span>
                                    : ` ${word} `
                                }
                                {breakLineAfter.includes(word) && <br />} {/* Add <br /> after specified words */}
                            </React.Fragment>
                            
                        ))}
                    </h1>
                    <div className={styles.line}></div>
                    <Link href="/services">Services</Link>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/heroImage.png" width={450} height={550} />
                </div>
            </div>
        </div>
    );
};

export default MainSection;