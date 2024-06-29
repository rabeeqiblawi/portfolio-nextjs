import React from 'react';
import styles from './mainSection.module.css'

const MainSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionCol}>
                    <h1>
                        Transfoming visions 
                        Into Immersive experiences
                    </h1>
                </div>
                <div className={`${styles.mainSectionCol} ${styles.mainSectionEmptyCol}`}>

                </div>
            </section>
            <section className={styles.showCasing}>
                <div className={styles.showCasingTitle}>
                </div>
                <div className={styles.col}></div>
                <div className={styles.col}></div>
            </section>
        </div>
    );
};

export default MainSection;