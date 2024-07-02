import React from 'react'

import styles from './Footer.module.scss'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import { config as websiteInformation } from '@/config'

const Footer = () => {
  const filteredSocialLinks = Object.entries(websiteInformation.socialLinks).filter(([key, value]) => value !== '');
  const filteredContact = Object.entries(websiteInformation.contact).filter(([key, value]) => value !== '');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>

          <div className={styles.linksColBox}>
            <h2>Contact</h2>
            {filteredContact.map(([key, value]) => (
              <div key={key} className={styles.footerColBox}>
                {key === 'phone' && <FaPhone />}
                {key === 'mail' && <FaEnvelope />}
                {key === 'location' && <FaMapMarker />}
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className={styles.linksColBox}>
            <h2>Follow Us</h2>
            {filteredSocialLinks.map(([key, value]) => (
              <div key={key} className={styles.footerColBox}>
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