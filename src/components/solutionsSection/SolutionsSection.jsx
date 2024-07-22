
import React from 'react';
import styles from './solutionsSection.module.scss';
import SectionHeader from '../sectionHeader/sectionHeader';
import InfoCard from '../cards/InfoCard';

const SolutionsSection = ({isHidden, headerTitle, headerHighlightedWord, headerID, filteredSolutions}) => {
    return (
        isHidden? null:
        <>
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            /> 
            <div className={styles.cardContainer}>
                {filteredSolutions.map(project => (
                    <InfoCard
                        key={project.title}
                        icon={project.icon}
                        title={project.title}
                        description={project.description}
                        actionText={project.actionText}
                        actionLink={project.actionLink}
                        comingSoon={project.comingSoon}
                    />
                ))}
            </div>
        </>
    );
};

export default SolutionsSection;