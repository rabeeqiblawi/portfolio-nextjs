import React from 'react';
import styles from './TeamMemberCard.module.scss';
// import Image from 'next/image';

const TeamMemberCard = ({ imageUrl, name, description }) => {
    return (
        <div className={styles.container}>
            <img
                src={imageUrl !== "" ? imageUrl : "/team/defaultPerson.png"}
                alt={name}
                className={styles.photo}
            />
            <div className={styles.content}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;