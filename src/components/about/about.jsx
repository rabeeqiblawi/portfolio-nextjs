import React from 'react'
import styles from './about.module.scss'
import { config as websiteInformation } from '@/config'

const About = () => {
    const { isHidden, title, highlightedWord, description, buttonText, buttonAction } = websiteInformation.content.about;

    return (
        isHidden? null : 
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 id='about' className={styles.title}>
                    {title.split(' ').map((word, index) => (
                        <React.Fragment key={index}>
                            {highlightedWord.includes(word) ?
                                <span>{word}</span>
                                : ` ${word} `
                            }
                        </React.Fragment>
                    ))}
                </h2>
                <p className={styles.description}>{description}</p>
                {buttonText && 
                    <a className={styles.button} href={buttonAction}>{buttonText}</a>
                }
            </div>
            <div className={styles.imgDev}>
                <img src={websiteInformation.content.about.aboutImageURL} alt="" />
            </div>
        </div>
    )
}

export default About