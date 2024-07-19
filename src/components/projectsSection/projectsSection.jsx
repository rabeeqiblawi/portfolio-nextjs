
import React, { useEffect, useState } from 'react';
import styles from './projectsSection.module.scss';
import SectionHeader from '../sectionHeader/sectionHeader';
import ProjectCard from '../cards/ProjectCard';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';

const ProjectsSection = ({isHidden, headerTitle, headerHighlightedWord, headerID, filteredProjects, allProjects}) => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [projectHeight, setProjectHeight] = useState(460); // project height 
    const [numProjects, setNumProjects] = useState(filteredProjects.length);
    const [totalHeight, setTotalHeight] = useState(numProjects * projectHeight);
    const [displayedProjects, setDisplayedProjects] = useState(filteredProjects);

    const handleCardHeightChange = (height) => {
        if (height > projectHeight) {
            setProjectHeight(height);
        }
    };
    
    useEffect(() => {
        let displayedProjects = [];

        if (showAllProjects) {
            displayedProjects = allProjects
                .sort((a, b) => {
                    // Sort by visibleHome
                    if (a.visibleHome && !b.visibleHome) return -1;
                    if (!a.visibleHome && b.visibleHome) return 1;
                    return 0;
                });
        }
        else {
            displayedProjects = filteredProjects
        }

        // Calculate numProjects and totalHeight based on filteredProjects
        const numProjects = displayedProjects.length;
        const totalHeight = numProjects * (projectHeight + 60); // height + gap

        // Update state
        setDisplayedProjects(displayedProjects);
        setNumProjects(numProjects);
        setTotalHeight(totalHeight);

    }, [showAllProjects, allProjects, projectHeight]);

    const showMore = () => {
        setShowAllProjects(!showAllProjects);
        if (showAllProjects) {
            window.location.href = "#projects";
        }
    }
    return (
        isHidden? null:
        <>
        {/* <div className={styles.middlePageVectors}>
            <img src="/middlePageVectors.png" alt="" />
            </div> 
        */}
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            /> 
            <div
                className={styles.responsiveContainer}
                style={{
                    maxHeight: totalHeight
                }}
            >
                {displayedProjects.map(project => (
                    <ProjectCard
                        key={project.title}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        description={project.description}
                        actionText={project.actionText}
                        actionLink={project.actionLink}
                        onHeightChange={handleCardHeightChange}
                    />
                ))}
            </div>
            <div className={styles.showMoreContainer} >
                <button onClick={showMore}>
                    {!showAllProjects ? "Show All Projects" : "Show less Projects"}
                    {!showAllProjects ? <span><FiPlusCircle /></span> : <span><FiMinusCircle /></span>}
                </button>
            </div>
        </>
    );
};

export default ProjectsSection;