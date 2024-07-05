import Image from 'next/image'
import styles from "./globals.css";
import { config as websiteInformation } from '@/config'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <div className="notFoundBox">
                <Image 
                    src={websiteInformation.content.notFoundURL} 
                    alt="404 Not Found" 
                    fill
                    className="notFoundImage" 
                />
            </div>
            <h2 className="notFoundSubtitle">Page Not Found</h2>
            <p className="notFoundText">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="notFoundButton">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound