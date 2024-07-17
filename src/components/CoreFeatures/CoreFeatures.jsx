import React from 'react';

import { config as websiteInformation } from '@/config';
import styles from './CoreFeatures.module.scss'; // Corrected import

const CoreFeatures = () => {
    const headLine = websiteInformation.content.coreFeatures.title;
    const highlightedHeadlineWords= websiteInformation.content.coreFeatures.highlightedWord;

    return (
        !websiteInformation.content.coreFeatures.isHidden &&
            <div className={styles.container}>
                <h2 className={styles.headers}>
                    {headLine.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                            {highlightedHeadlineWords.includes(word) ?
                                <span>{word}</span>
                                : ` ${word} `
                            }
                        </React.Fragment>
                    ))}
                </h2>

                <div className={styles.features}>
                    {websiteInformation.content.coreFeatures.data.map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <span className='feature-icon'>{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default CoreFeatures;