'use client'
import React, { useEffect, useRef } from 'react';
import styles from './MiniProjectCard.module.scss';
import Link from 'next/link';

const MiniProjectCard = ({ imageUrl, title, description, actionLink}) => {
    const cardRef = useRef(null);

    return (
        <Link href={actionLink} target='_blank' className={styles.container}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </Link>
    );
};

export default MiniProjectCard;