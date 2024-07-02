import React from 'react';
import styles from './MainSection.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const MainSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1>Transfoming <span style={{ color: "#f98125" }}>Visions</span> <br /> into Immersive <span style={{ color: "#f98125" }}>Experiences</span></h1>
                    <div className={styles.line}></div>
                    <Link href="/services">Services</Link>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/heroImage.png" width={400} height={450} />
                </div>
            </div>
        </div>
    );
};

export default MainSection;