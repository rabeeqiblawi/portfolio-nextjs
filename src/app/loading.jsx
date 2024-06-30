import Image from 'next/image'
import styles from './Home.module.css'
import { config as websiteInformation } from '@/config'

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <Image src={websiteInformation.content.logo} alt="" width={35} height={35} className={styles.imgLogo} />
            <h3>Loading...</h3>
        </div>
    )
  }
  
  export default Loading