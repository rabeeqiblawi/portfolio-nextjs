import styles from './projects.module.scss'
import Card from '@/components/cards/Card';
import { config as websiteInformation } from '@/config'

const Projects = () => {
    const filteredProjects = websiteInformation.content.projects.data.filter(project => !project.isHidden);

    return (
        <section className={styles.container}>
            <h2 id='project' className={styles["container-headers"]}>Our <span>Projects</span></h2>
            <div className={styles["container-cards"]}>
                {filteredProjects.map(project => (
                    <Card
                    key={project.title}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    description={project.description}
                    actionText={project.actionText}
                    cssClassName="project"
                    />
                ))}
            </div>
        
        </section>
    )
  }
  
export default Projects