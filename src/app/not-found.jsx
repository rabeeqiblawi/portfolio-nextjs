import Image from 'next/image'
import styles from './Home.module.css'
import { config as websiteInformation } from '@/config'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundBox}>
                <Image 
                    src={websiteInformation.content.notFoundURL} 
                    alt="404 Not Found" 
                    fill
                    className={styles.notFoundImage} 
                />
            </div>
            {/* <h1 className={styles.notFoundTitle}>404</h1> */}
            <h2 className={styles.notFoundSubtitle}>Page Not Found</h2>
            <p className={styles.notFoundText}>
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className={styles.notFoundButton}>
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound