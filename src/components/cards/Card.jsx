import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({ imageUrl, icon, title, description, actionText, cssClassName}) => {
    console.log(icon);
    return (
        <div className={styles[cssClassName]}>
            {imageUrl && <img src={imageUrl} alt={title} className={styles.media} />}
            <div className={styles.content}>
                { icon && <Image src={icon} alt={title} className={styles.icon} width={35} height={35} />}
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonDiv}>
                    <button className={styles.previewWebsiteButton}>{actionText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;