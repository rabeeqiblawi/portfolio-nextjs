import React from 'react';
import styles from './ResponsiveMediaCard.module.css';

const ResponsiveMediaCard = ({ imageUrl, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <button className={styles.previewWebsiteButton}>Check the Website</button>
            </div>
        </div>
    );
};

export default ResponsiveMediaCard;