import React from 'react';
import styles from './whatsAppIcon.module.scss';
import Link from 'next/link';
import {FaWhatsapp} from 'react-icons/fa';
import { config as websiteInformation } from '@/config'


const WhatsAppIcon = ({}) => {
    return (
        <div className={styles.container}>
            <Link href={`https://wa.me/${websiteInformation.contact.contactInfo.phone.replace(/\s/g, '')}?text=${encodeURIComponent("Hello there! I would like to get in touch with you.")}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </Link>
        </div>
    );
};

export default WhatsAppIcon;