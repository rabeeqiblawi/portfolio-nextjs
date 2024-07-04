import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import Card from '@/components/cards/Card';
import { config as websiteInformation } from '@/config'
import Image from 'next/image';
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';

export default function Home() {
  const filteredProjects = websiteInformation.content.projects.data.filter(project => project.visibleHome && !project.isHidden);
  const projectSectionShow = !websiteInformation.content.projects.isHidden;
  const filteredSolutions = websiteInformation.content.solutions.data.filter(project => project.visibleHome && !project.isHidden);
  const solutionsSectionShow = !websiteInformation.content.solutions.isHidden;
  const teamSectionShow = !websiteInformation.content.team.isHidden;
  const filteredTeam = websiteInformation.content.team.members.filter(project => project.visibleHome && !project.isHidden);
  const filteredContact = Object.entries(websiteInformation.contact.contactInfo).filter(([key, value]) => value !== '');
  const contactSectionShow = !websiteInformation.contact.isHidden;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />

        {projectSectionShow && (
            <>
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
              </div>
            </>
          )}

        {solutionsSectionShow && (
          <>
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
          </>
        )}

        {contactSectionShow && (
          <>
            <h2 id='contact' className={styles.headers}>Contact <span>Us</span></h2>
            
            <div className={styles.contactContainer}>
              <div className={styles["contact-img"]}>
                <Image src={websiteInformation.contact.imageUrl} fill alt="Contact Us" />
              </div>
              <div className={styles["contact-content"]}>
                <h2>{websiteInformation.contact.title}</h2>
                <p>{websiteInformation.contact.description}</p>
                <ul>
                  {filteredContact.map(([key, value]) => (
                    <div key={key} className={styles.colBoxContent}>
                      <li>
                        {key === 'phone' && <FaPhone className={styles.icon} />}
                        {key === 'mail' && <FaEnvelope className={styles.icon} />}
                        {key === 'location' && <FaMapMarker className={styles.icon} />}
                      {value}</li>
                    </div>
                  ))}
                </ul>
                <p>Feel free to reach out to us through any of these channels. Our team is ready to assist you!</p>
                <a href={`mailto:${websiteInformation.contact.contactInfo.mail}`}>
                  <button className={styles.contactButton}>
                    {websiteInformation.contact.buttonText}
                  </button>
                </a>
              </div>
            </div>

          </>
        )}
        
        {teamSectionShow && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
