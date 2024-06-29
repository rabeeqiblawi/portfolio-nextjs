import React from 'react'

import styles from './Footer.module.css'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import { config as websiteInformation } from '@/config'

const Footer = () => {
  const filteredSocialLinks = Object.entries(websiteInformation.socialLinks).filter(([key, value]) => value !== '');

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={websiteInformation.content.logo} alt="" width={20} height={20} className={styles.imgLogo}/>
          <h1>{websiteInformation.content.brand}</h1>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.footerCol}>
            <h2>Contact</h2>
            <div className={styles.footerColBox}>
              <FaPhone />
              <span>{websiteInformation.contact.phone}</span>
            </div>
            <div className={styles.footerColBox}>
              <FaEnvelope />
              <span>{websiteInformation.contact.mail}</span>
            </div>
            <div className={styles.footerColBox}>
              <FaMapMarker />
              <span>{websiteInformation.contact.location}</span>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h2>Follow Us</h2>
            {/* <div className={styles.footerColBox}>
              <FaFacebook className={styles.icon} />
              <a href={websiteInformation.socialLinks.facebook} target="_blank">Facebook</a>
            </div>
            <div className={styles.footerColBox}>
              <FaTwitter className={styles.icon} />
              <a href={websiteInformation.socialLinks.twitter} target="_blank">Twitter</a>
            </div>
            <div className={styles.footerColBox}>
              <FaInstagram className={styles.icon} />
              <a href={websiteInformation.socialLinks.instagram} target="_blank">Instagram</a>
            </div> */}
            {filteredSocialLinks.map(([key, value]) => (
              <div key={key} className={styles.footerColBox}>
                {key === 'facebook' && <FaFacebook className={styles.icon} />}
                {key === 'twitter' && <FaTwitter className={styles.icon} />}
                {key === 'instagram' && <FaInstagram className={styles.icon} />}
                {key === 'github' && <FaGithub className={styles.icon} />}
                {key === 'linkedin' && <FaLinkedin className={styles.icon} />}
                {key === 'tiktok' && <FaTiktok className={styles.icon} />}
                {key === 'youtube' && <FaYoutube className={styles.icon} />}
                <a href={value} target="_blank" rel="noopener noreferrer">
                  {key.charAt(0).toUpperCase() + key.slice(1)} {/* Capitalize the platform name */}
                </a>
              </div>
            ))}
          </div>
          {/* <div className={styles.footerCol}></div>
          <div className={styles.footerCol}></div> */}
        </div>
        <br />
        <hr />
        <br />
        <p className={styles.copyrightText}>&copy; 2024, Choroid</p>
    </div>
  )
}

export default Footer