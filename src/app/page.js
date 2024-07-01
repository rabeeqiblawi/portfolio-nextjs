import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import ResponsiveMediaCard from '@/components/cards/responsive-media-card/ResponsiveMediaCard';
import { config as websiteInformation } from '@/config'

export default function Home() {
  const filteredProjects = websiteInformation.content.projects.filter(project => project.visibleHome);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />
        <div className="responsiveContainer">
          {filteredProjects.map(project => (
              <ResponsiveMediaCard
                key={project.title}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
