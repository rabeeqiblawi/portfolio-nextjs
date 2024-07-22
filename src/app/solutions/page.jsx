import styles from './solutions.module.scss'
import InfoCard from '@/components/cards/InfoCard';
import { config as websiteInformation } from '@/config'

const Projects = () => {
    const filteredSolutions = websiteInformation.content.solutions.data.filter(project => project.visibleHome && !project.isHidden);

    return (
        <section className={styles.container}>
            <h2 id='solution' className={styles["container-headers"]} >Our <span>Solutions</span></h2>

            <div className={styles["container-cards"]}>
            {filteredSolutions.map(project => (
                <InfoCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText={project.actionText}
                actionLink={project.actionLink}
                comingSoon={project.comingSoon}
                />
            ))}
            </div>
        </section>
    )
  }
  
export default Projects