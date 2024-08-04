import React from 'react';
import styles from './learning.module.scss';
import { learningConfig as websiteInformation } from '@/learningConfig'
import CourseCard from '@/components/cards/CourseCard';
import SectionHeader from '@/components/sectionHeader/sectionHeader';

const Learning = () => {
    const filteredCourses= websiteInformation.courses.data.filter(project => (!project.isHidden));
    const headerTitle = websiteInformation.courses.mainTitle;
    const headerTitleHighlightedWord = websiteInformation.courses.mainTitleHighlightedWord;
    return (
        <div className={styles.container}>
            <SectionHeader
                headerTitle={headerTitle}
                headerHighlightedWord={headerTitleHighlightedWord}
            />

            <div className={styles.coursesCards}>
                {filteredCourses.map((project, index) => (
                    <CourseCard
                        key={index}
                        imageUrl={project.imageUrl}
                        title={project.title}
                        description={project.description}
                        price={project.price}
                        duration={project.duration}
                        startDate={project.startDate}
                        endDate={project.endDate}
                        target={project.target}
                        outcomes={project.outcomes}
                        actionText={project.actionText}
                        actionLink={project.actionLink}
                        courseLink={project.courseLink}
                    />
                ))}

            </div>
        </div>
    );
};

export default Learning;