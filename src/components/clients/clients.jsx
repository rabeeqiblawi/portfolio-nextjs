import styles from './clients.module.scss'
import { config as websiteInformation } from '@/config'

const Clients = () => {
    const { isHidden, title, subtitle, buttonText, buttonAction, clientList } = websiteInformation.content.clients;

    return (
        isHidden ? null :
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.clientGrid}>
                    {clientList.map((client, index) => (
                        <div key={index} className={styles.clientLogo}>
                            <img src={client.logo} alt={client.name} />
                        </div>
                    ))}
                </div>
                {buttonText && 
                    <a className={styles.button} href={buttonAction}>{buttonText}</a>
                }
            </div>
        </div>
    )
}

export default Clients