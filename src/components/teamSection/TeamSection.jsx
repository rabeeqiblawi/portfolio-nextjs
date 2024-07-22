import React from 'react';
import styles from './TeamSection.module.scss';
import SectionHeader from '../sectionHeader/sectionHeader';
import TeamMemberCard from '../cards/TeamMemberCard';


const TeamSection = ({isHidden, headerTitle, headerHighlightedWord, headerID, filteredTeam}) => {
    return (
        isHidden? null:
        <>
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            />  
            <div className={styles.teamContainer}>
                {filteredTeam.map(project => (
                    <TeamMemberCard
                        key={project.title}
                        imageUrl={project.imageUrl}
                        name={project.title}
                        description={project.description}
                        isPremium={project.isPremium}
                    />
                ))}
            </div>
        </>
    );
};

export default TeamSection;