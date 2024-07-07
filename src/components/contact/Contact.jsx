import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { config as websiteInformation } from '@/config'
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';


const Contact = () => {
    const filteredContact = Object.entries(websiteInformation.contact.contactInfo).filter(([key, value]) => value !== '');
    return (
        <div className={styles.container}>
            <div className={styles["container-imgDev"]}>
                <Image src={websiteInformation.contact.imageUrl} fill alt="Contact Us" />
            </div>
            <div className={styles["container-content"]}>
                <h2>{websiteInformation.contact.title}</h2>
                <p>{websiteInformation.contact.description}</p>
                <ul>
                    {filteredContact.map(([key, value]) => (
                        <div key={key} className={styles.colBoxContent}>
                            <li>
                                {key === 'phone' && <FaPhone className={styles.icon} />}
                                {key === 'mail' && <FaEnvelope className={styles.icon} />}
                                {key === 'location' && <FaMapMarker className={styles.icon} />}
                                {value}
                            </li>
                        </div>
                    ))}
                </ul>
                <p>Feel free to reach out to us through any of these channels. Our team is ready to assist you!</p>
                <a href={`mailto:${websiteInformation.contact.contactInfo.mail}`}>
                    <button className={styles.contactButton}>
                        {websiteInformation.contact.buttonText}
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Contact;