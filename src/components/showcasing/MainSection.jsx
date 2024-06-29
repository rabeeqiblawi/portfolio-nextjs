import React from 'react';
import styles from './mainSection.module.css'
import { config as websiteInformation } from '@/config'

const MainSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionCol}>
                    <h1>
                        {websiteInformation.content.heroHeadLine}
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