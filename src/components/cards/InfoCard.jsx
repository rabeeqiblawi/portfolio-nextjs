import React from 'react';
import styles from './InfoCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const InfoCard = ({ icon, title, description, actionText, actionLink, commingSoon }) => {
    commingSoon ="/icons/soon.svg";
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
                {commingSoon && 
                    <Image src={commingSoon} alt={title} className={styles.comingSoon} width={70} height={70} />
                }

            </div>
        </div>
    );
};

export default InfoCard;