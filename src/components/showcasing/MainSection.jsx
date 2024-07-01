import React from 'react';
import styles from './mainSection.module.css'
import { config as websiteInformation } from '@/config'
import Image from 'next/image';

const MainSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.mainSection}>
                <div className={styles.mainSectionCol}>
                    <h1>Transfoming <span style={{color:"#f98125"}}>Visions</span> into Immersive <span style={{color:"#f98125"}}>Experiences</span></h1>
                    <button>Projects</button>
                </div>
                
                <div className={`${styles.mainSectionCol} ${styles.mainSectionEmptyCol}`}>

                </div>
            </section>
        </div>
    );
};

export default MainSection;