import React from 'react';
import styles from './sectionHeader.module.scss';

const SectionHeader = ({headerTitle, headerHighlightedWord, headerID}) => {
    return (
        <h2 id={headerID} className={styles.headers}>
            {headerTitle.split(' ').map((word, index) => (
                <React.Fragment key={index}>
                    {headerHighlightedWord.includes(word) ?
                        <span>{word}</span>
                        : ` ${word} `
                    }
                </React.Fragment>
            ))}
        </h2>
    );
};

export default SectionHeader;
