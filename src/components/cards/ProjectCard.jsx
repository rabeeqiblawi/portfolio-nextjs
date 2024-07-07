import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({imageUrl, title, description, actionText, actionLink }) => {
    return (
        <div className={styles.container}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <a href={actionLink} target='_blank' className={styles.buttonDiv}>
                    <button className={styles.previewWebsiteButton}>{actionText}</button>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;