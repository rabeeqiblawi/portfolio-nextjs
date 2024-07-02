import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import Card from '@/components/cards/Card';
import { config as websiteInformation } from '@/config'

export default function Home() {
  const filteredProjects = websiteInformation.content.projects.filter(project => project.visibleHome);
  const filteredSolutions = websiteInformation.content.solutions.filter(project => project.visibleHome);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />

        <h2 style={{ fontSize: "50px", margin: "40px 0px", color: "var(--text-dark)" }}>Our <span style={{ color: "#f98125" }}>Projects</span></h2>

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

          <h2 style={{ fontSize: "50px", margin: "40px 0px", color: "var(--text-dark)" }}>Our <span style={{ color: "#f98125" }}>Solutions</span></h2>

          <div className={styles.cardContainer}>
            {filteredSolutions.map(project => (
              <Card
                key={project.title}
                imageUrl={project.imageUrl}
                icon={project.icon}
                title={project.title}
                description={project.description}
                actionText={project.actionText}
                cssClassName="solution"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
