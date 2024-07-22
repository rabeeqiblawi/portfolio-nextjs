
import React from 'react';
import styles from './servicesSection.module.scss';
import SectionHeader from '../sectionHeader/sectionHeader';
import InfoCard from '../cards/InfoCard';

const ServicesSection = ({isHidden, headerTitle, headerHighlightedWord, headerID, filteredServices}) => {
    return (
        isHidden? null:
        <>
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            />  
            <div className={styles.cardContainer}>
                {filteredServices.map(service => (
                    <InfoCard
                        key={service.title}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        actionText={service.actionText}
                        actionLink={service.actionLink}
                        comingSoon={service.comingSoon}
                    />
                ))}
            </div>
        </>
    );
};

export default ServicesSection;
