import React from 'react';
import styles from './mainSection.module.css'
import { config as websiteInformation } from '@/config'
import Image from 'next/image';

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
        </div>
    );
};

export default MainSection;