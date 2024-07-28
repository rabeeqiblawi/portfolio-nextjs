'use client'
import React, { useEffect, useRef } from 'react';
import styles from './CourseCard.module.scss';
import Link from 'next/link';

const CourseCard = ({ imageUrl, title, description, actionText, actionLink}) => {
    return (
        <div href={actionLink} target='_blank' className={styles.container}>
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <Link href={actionLink} target='_blank' className={styles.link}>
                {actionText}
            </Link>
        </div>
    );
};

export default CourseCard;