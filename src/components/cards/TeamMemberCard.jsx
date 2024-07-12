import React from 'react';
import styles from './TeamMemberCard.module.scss';
// import Image from 'next/image';
import { MdOutlineWorkspacePremium } from "react-icons/md";

const TeamMemberCard = ({ imageUrl, name, description, isPremium }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {isPremium && <span className={styles.premiumIcon}><MdOutlineWorkspacePremium /></span>}
                <img
                    src={imageUrl !== "" ? imageUrl : "/team/defaultPerson.png"}
                    alt={name}
                    className={styles.photo}
                />
            </div>
            <div className={styles.content}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default TeamMemberCard;