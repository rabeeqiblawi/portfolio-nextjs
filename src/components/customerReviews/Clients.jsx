import styles from './Clients.module.scss'

const Clients = ({isHidden, title, subtitle, buttonText, buttonAction, clientList}) => {
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