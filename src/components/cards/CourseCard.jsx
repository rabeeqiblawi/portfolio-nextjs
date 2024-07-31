'use client'
import styles from './CourseCard.module.scss';
import Link from 'next/link';

const CourseCard = ({ imageUrl, title, description, price, duration, startDate, endDate, target, outcomes , actionText, actionLink, courseLink}) => {
    return (
        <button   
            onClick={() => window.open(courseLink, '_blank', 'noopener,noreferrer')}
            className={styles.container}
        >
            <img src={imageUrl} alt={title} className={styles.media} />
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2>{title}</h2>
                    {price && <span>{price}</span>}
                </div>
                <div className={styles.details}>
                    <p className={styles.description}>{description.substring(0, 150)}...</p>
                    <p><span>Duration:</span> {duration}</p>
                    <p><span>Start Date:</span> {startDate}</p>
                    {endDate && <p><span>Ending Date:</span> {endDate}</p>}
                    <p><span>target audence</span> {target}</p>
                    <p><span>Learning outcomes</span> {outcomes}</p>
                </div>
            </div>
            <Link href={actionLink} target='_blank' className={styles.link}>
                {actionText}
            </Link>
        </button>
    );
};

export default CourseCard;