import React from 'react';
import styles from './InfoCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const InfoCard = ({ icon, title, description, actionText, actionLink, comingSoon }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Image src={icon} alt={title} className={styles.icon} width={35} height={35} />
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                {actionText &&
                    <Link href={actionLink} target="_blank" className={styles.buttonDiv}>
                        <button className={styles.previewWebsiteButton}>{actionText}</button>
                    </Link>
                }
                {comingSoon && 
                    <div className={styles.comingSoon}>Coming Soon</div>
                }
            </div>
        </div>
    );
};

export default InfoCard;