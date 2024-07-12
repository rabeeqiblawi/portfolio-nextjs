import Image from 'next/image'
import styles from "./globals.css";
import { config as websiteInformation } from '@/config'

const Loading = () => {
    return (
        <div className="loadingContainer">
            <div className="loadingBox">
                <Image src={websiteInformation.content.logo} alt="" width={35} height={35} className="imgLogo" />
            </div>
            <h3>Loading...</h3>
        </div>
    )
  }
  
  export default Loading