import React from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';
import { FaHeadSideCough } from 'react-icons/fa';

const Card = ({ imageUrl, icon, title, description, actionText, cssClassName }) => {
    console.log(icon);
    return (
        <>
            {cssClassName =="project" && <div className={styles[cssClassName]}>
                {imageUrl && <img src={imageUrl} alt={title} className={styles.media} />}
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.buttonDiv}>
                        <button className={styles.previewWebsiteButton}>{actionText}</button>
                    </div>
                </div>
            </div>}

            {cssClassName =="solution" && <div className={styles[cssClassName]}>
                <div className={styles.content}>
                    {icon && <Image src={icon} alt={title} className={styles.icon} width={35} height={35} />}
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.buttonDiv}>
                        <button className={styles.previewWebsiteButton}>{actionText}</button>
                    </div>
                </div>
            </div>}

            {cssClassName =="contact" && <div className={styles[cssClassName]}>
                {/* {imageUrl && <img src={imageUrl} alt={title} className={styles.media} />}
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.buttonDiv}>
                        <button className={styles.previewWebsiteButton}>{actionText}</button>
                    </div>
                </div> */}
            </div>}
            
            {cssClassName =="team" && <div className={styles[cssClassName]}>
                {<img src={imageUrl !=="" ? imageUrl : "/team/defaultPerson.png"} alt={title} className={styles.media} />}
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>}
        </>
    );
};

export default Card;