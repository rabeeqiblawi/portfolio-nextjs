import React from 'react';
import styles from './MainSection.module.scss'
import Link from 'next/link';

const MainSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainSection}>
                <h1>Transfoming <span style={{ color: "#f98125" }}>Visions</span> into Immersive <span style={{ color: "#f98125" }}>Experiences</span></h1>
                <div className={styles.line}></div>
                <Link href="/services">Services</Link>
            </div>
        </div>
    );
};

export default MainSection;