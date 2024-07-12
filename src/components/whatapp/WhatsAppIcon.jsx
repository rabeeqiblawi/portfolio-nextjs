import React from 'react';
import styles from './whatsAppIcon.module.scss';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { config as websiteInformation } from '@/config'; // Assuming this import is correct

const WhatsAppIcon = ({}) => {
    return (
        <div className={styles.container}>
            <Link
                href={`https://wa.me/${websiteInformation.contact.contactInfo.phone.replace(/\s/g, '')}?text=${encodeURIComponent(websiteInformation.contact.contactInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp />
            </Link>
        </div>
    );
};

export default WhatsAppIcon;
