import React from 'react'
import styles from './about.module.scss'
import SectionHeader from '../sectionHeader/sectionHeader'

const About = ({isHidden, headerTitle, headerTitleHighlightedWord, description, buttonText, buttonAction, aboutImageURL }) => {
    // const { isHidden, title, highlightedWord, description, buttonText, buttonAction, aboutImageURL } = websiteInformation.content.about;

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
                <img src={aboutImageURL} alt="" />
            </div>
        </div>
    )
}

export default About