import React, { useEffect, useRef } from 'react';
import styles from './relatedCard.module.scss';
import Link from 'next/link';

const RelatedCard = ({ imageUrl, title, date, actionLink, description}) => {

    return (
        <Link href={actionLink} className={styles.container}>
            <div className={styles.content}>
                <img src={imageUrl} alt={title} className={styles.media} />
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.date}>{date}</p>
                </div>
            </div>
            {/* {description &&
                <div className={styles.description}>
                    <p>{description}</p>
                </div>
            } */}
        </Link>
    );
};

export default RelatedCard;