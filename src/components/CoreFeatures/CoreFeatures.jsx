import { config as websiteInformation } from '@/config';
import styles from './CoreFeatures.module.scss'; // Corrected import

const CoreFeatures = () => {
    return (
        !websiteInformation.content.coreFeatures.isHidden &&
            <div className={styles.container}> {/* Use styles object to access class */}
                {websiteInformation.content.coreFeatures.data.map((feature, index) => (
                    <div key={index} className={styles.featureItem}> {/* Use styles object to access class */}
                        <span className='feature-icon'>{feature.icon}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
    );
}

export default CoreFeatures;