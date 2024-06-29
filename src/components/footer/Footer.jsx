import React from 'react'

import styles from './Footer.module.css'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarker, FaPhone, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import { config as websiteInformation } from '@/config'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/choroidLogo.jpg" alt="" width={20} height={20} className={styles.imgLogo}/>
          <h1>Choroid</h1>
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
            <div className={styles.footerColBox}>
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
            </div>
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