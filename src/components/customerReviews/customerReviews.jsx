import styles from './customerReviews.module.scss'
import { config as websiteInformation } from '@/config'

const CustomerReviews = () => {
    const { isHidden, customer } = websiteInformation.content.customerReviews;

    return (
    isHidden? null :
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Our clients love the we build stores experience</h2>
                <div className={styles.reviewGrid}>
                    {customer.filter(c => c.visibleHome).map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <div className={styles.imageWrapper}>
                                {review.imageUrl && <img src={review.imageUrl} alt={review.title} className={styles.avatar} />}
                            </div>
                            <h3 className={styles.reviewTitle}>{review.title}</h3>
                            <p className={styles.reviewDescription}>{review.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews