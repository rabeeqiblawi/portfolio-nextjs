'use client'
import React, { useEffect, useRef } from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ imageUrl, title, description, actionText, actionLink, onHeightChange }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            const height = cardRef.current.offsetHeight;
            onHeightChange(height);
        }
    }, [onHeightChange]);

    return (
        <div ref={cardRef} className={styles.container}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                {actionText && 
                    <a href={actionLink} target='_blank' rel="noopener noreferrer" className={styles.buttonDiv}>
                        <button className={styles.previewWebsiteButton}>{actionText}</button>
                    </a>
                }
            </div>
        </div>
    );
};

export default ProjectCard;