import React from 'react'

import styles from './Footer.module.scss'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import { config as websiteInformation } from '@/config'
import WhatsAppIcon from '../whatapp/WhatsAppIcon'

const Footer = () => {
  const filteredSocialLinks = Object.entries(websiteInformation.socialLinks).filter(([key, value]) => value !== '');
  const filteredContact = Object.entries(websiteInformation.contact.contactInfo).filter(([key, value]) => value !== '');

  return (
    <div className={styles.container}>
      <WhatsAppIcon />
      <div className={styles.content}>
        <div className={styles.topContent}>

          <div className={styles.logoColBox}>
            <Image src={websiteInformation.content.logo} alt="" width={60} height={60} />
            <h1>{websiteInformation.content.brand}</h1>
          </div>

          <div className={styles.linksColBox}>
            <h2>Contact</h2>
            {filteredContact.map(([key, value]) => (
              <div key={key} className={styles.colBoxContent}>
                {key === 'phone' && <FaPhone className={styles.icon} />}
                {key === 'mail' && <FaEnvelope className={styles.icon} />}
                {key === 'location' && <FaMapMarkerAlt className={styles.icon} />}
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className={styles.linksColBox}>
            <h2>Follow Us</h2>
            {filteredSocialLinks.map(([key, value]) => (
              <div key={key} className={styles.colBoxContent}>
                {key === 'facebook' && <FaFacebook className={styles.icon} />}
                {key === 'twitter' && <FaTwitter className={styles.icon} />}
                {key === 'instagram' && <FaInstagram className={styles.icon} />}
                {key === 'github' && <FaGithub className={styles.icon} />}
                {key === 'linkedin' && <FaLinkedin className={styles.icon} />}
                {key === 'tiktok' && <FaTiktok className={styles.icon} />}
                {key === 'youtube' && <FaYoutube className={styles.icon} />}
                <a href={value} target="_blank">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              </div>
            ))}
          </div>

        </div>
        <div className={styles.bottomContent}>
          <p className={styles.copyrightText}>&copy; 2024, Choroid. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer