import React from 'react'
import styles from './about.module.scss'
import SectionHeader from '../sectionHeader/sectionHeader'
import Image from 'next/image'

const About = ({isHidden, headerTitle, headerTitleHighlightedWord, description, buttonText, buttonAction, aboutImageURL }) => {

    return (
        isHidden? null : 
        <div className={styles.container}>
            <div className={styles.content}>
                <SectionHeader
                    headerTitle={headerTitle}
                    headerHighlightedWord={headerTitleHighlightedWord}
                    headerID='about'
                />
                <p className={styles.description}>{description}</p>
                {buttonText && 
                    <a className={styles.button} href={buttonAction}>{buttonText}</a>
                }
            </div>
            <div className={styles.imgDev}>
                <Image src={aboutImageURL} alt="" />
            </div>
        </div>
    )
}

export default About
