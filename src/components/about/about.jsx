import styles from './about.module.scss'
import { config as websiteInformation } from '@/config'

const About = () => {
    const { title, description, buttonText, buttonAction } = websiteInformation.content.about;

    return (
        !websiteInformation.content.about.isHidden && (
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 id='about' className={styles.title}>{title}</h2>
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
    )
}

export default About