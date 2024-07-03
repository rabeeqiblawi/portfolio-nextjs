import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import Card from '@/components/cards/Card';
import { config as websiteInformation } from '@/config'

export default function Home() {
  const filteredProjects = websiteInformation.content.projects.filter(project => project.visibleHome);
  const filteredSolutions = websiteInformation.content.solutions.filter(project => project.visibleHome);
  const filteredTeam = websiteInformation.content.team.filter(project => project.visibleHome);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />

        <h2 id='project' className={styles.headers}>Our <span>Projects</span></h2>

        <div className="responsiveContainer">
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

          <h2 id='solution' className={styles.headers} >Our <span>Solutions</span></h2>

          <div className={styles.cardContainer}>
            {filteredSolutions.map(project => (
              <Card
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText={project.actionText}
                cssClassName="solution"
              />
            ))}
          </div>

          <h2 id='contact' className={styles.headers}>Contact <span>Us</span></h2>

          <div className={styles.cardContainer}>
            {filteredSolutions.map(project => (
              <Card
                key={project.title}
                imageUrl={project.imageUrl}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText={project.actionText}
                cssClassName="contact"
              />
            ))}
          </div>

          <h2 className={styles.headers}>Meet the <span>Team</span></h2>

          <div className={styles.cardContainer}>
            {filteredTeam.map(project => (
              <Card
                key={project.title}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                cssClassName="team"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
