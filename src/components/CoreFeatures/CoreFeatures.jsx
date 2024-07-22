import React from 'react';

import { config as websiteInformation } from '@/config';
import styles from './CoreFeatures.module.scss'; // Corrected import
import SectionHeader from '../sectionHeader/sectionHeader';

const CoreFeatures = ({isHidden, headerTitle, headerTitleHighlightedWord, data }) => {

    return (
        isHidden? null:
        <>
            <SectionHeader
                headerTitle={headerTitle}
                headerHighlightedWord={headerTitleHighlightedWord}
            />
            <div className={styles.container}>

                <div className={styles.features}>
                    {data.map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <span className='feature-icon'>{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CoreFeatures;