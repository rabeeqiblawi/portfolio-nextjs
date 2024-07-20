import React from 'react';
import styles from './InfoCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const InfoCard = ({ icon, title, description, actionText, actionLink }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image src={icon} alt={title} className={styles.icon} width={35} height={35} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <Link href={actionLink} className={styles.buttonDiv}>
                    <button className={styles.previewWebsiteButton}>{actionText}</button>
                </Link>
            </div>
        </div>
    );
};

export default InfoCard;