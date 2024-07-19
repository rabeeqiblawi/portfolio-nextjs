import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
// import { config as websiteInformation } from '@/config'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionHeader from '../sectionHeader/sectionHeader';


const Contact = ({isHidden, headerTitle, headerHighlightedWord, headerID, imageUrl, title, description, filteredContact, mail ,buttonText }) => {
    return (
        isHidden? null:
        <>
            <SectionHeader 
                headerTitle={headerTitle} 
                headerHighlightedWord={headerHighlightedWord} 
                headerID={headerID} 
            />  
            <div className={styles.container}>
                <div className={styles["container-imgDev"]}>
                    <Image src={imageUrl} fill alt="Contact Us" />
                </div>
                <div className={styles["container-content"]}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                        {filteredContact.map(([key, value]) => (
                            <div key={key} className={styles.colBoxContent}>
                                <li>
                                    {key === 'phone' && <FaPhone className={styles.icon} />}
                                    {key === 'mail' && <FaEnvelope className={styles.icon} />}
                                    {key === 'location' && <FaMapMarkerAlt className={styles.icon} />}
                                    {value}
                                </li>
                            </div>
                        ))}
                    </ul>
                    <p>Feel free to reach out to us through any of these channels. Our team is ready to assist you!</p>
                    <a href={`mailto:${mail}`}>
                        <button className={styles.contactButton}>
                            {buttonText}
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contact;