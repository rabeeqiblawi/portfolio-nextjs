import React from 'react';
import styles from './InfoCard.module.scss';
import Image from 'next/image';

const serviceCard = ({ icon, title, description, actionText }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image src={icon} alt={title} className={styles.icon} width={35} height={35} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.buttonDiv}>
                    <button className={styles.previewWebsiteButton}>{actionText}</button>
                </div>
            </div>
        </div>
    );
};

export default serviceCard;