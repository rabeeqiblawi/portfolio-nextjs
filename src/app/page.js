"use client"

import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import { config as websiteInformation } from '@/config'

import ProjectCard from '@/components/cards/ProjectCard';
import InfoCard from '@/components/cards/InfoCard';
import Contact from '@/components/contact/Contact'
import TeamMemberCard from '@/components/cards/TeamMemberCard'
import { useEffect, useState } from 'react';

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(websiteInformation.content.projects.data.filter(project => (project.visibleHome && !project.isHidden)));
  const [showAllProjects, setshowAllProjects] = useState(false);
  const [projectHeight, setProjectHeight] = useState(460); // project height 
  const [numProjects, setNumProjects] = useState(filteredProjects.length);
  const [totalHeight, setTotalHeight] = useState(numProjects * projectHeight);


  const projectSectionShow = !websiteInformation.content.projects.isHidden;
  const filteredSolutions = websiteInformation.content.solutions.data.filter(project => project.visibleHome && !project.isHidden);
  const solutionsSectionShow = !websiteInformation.content.solutions.isHidden;
  const teamSectionShow = !websiteInformation.content.team.isHidden;
  const filteredServices = websiteInformation.content.services.data.filter(service => service.visibleHome && !service.isHidden);
  const servicesSectionShow = !websiteInformation.content.services.isHidden;
  const filteredTeam = websiteInformation.content.team.members.filter(project => project.visibleHome && !project.isHidden);
  const contactSectionShow = !websiteInformation.contact.isHidden;

  const handleCardHeightChange = (height) => {
    if (height > projectHeight) {
      setProjectHeight(height);
    }
  };

  useEffect(() => {
    let filteredProjects = [];

    if (showAllProjects) {
      filteredProjects = websiteInformation.content.projects.data
        .filter(project => !project.isHidden)
        .sort((a, b) => {
          // Sort by visibleHome
          if (a.visibleHome && !b.visibleHome) return -1;
          if (!a.visibleHome && b.visibleHome) return 1;
          return 0;
        });
    } else {
      filteredProjects = websiteInformation.content.projects.data
        .filter(project => project.visibleHome && !project.isHidden);
    }

    // Calculate numProjects and totalHeight based on filteredProjects
    const numProjects = filteredProjects.length;
    const totalHeight = numProjects * (projectHeight + 60); // height + gap

    // Update state
    setFilteredProjects(filteredProjects);
    setNumProjects(numProjects);
    setTotalHeight(totalHeight);

  }, [showAllProjects, websiteInformation.content.projects.data, projectHeight]); // Dependencies should include showAllProjects and data used to filter


  const showMore = () => {
    setshowAllProjects(!showAllProjects);
    if (showAllProjects) {
      window.location.href = "#projects";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />

        {projectSectionShow && (
          <>
            {/* <div className={styles.middlePageVectors}>
              <img src="/middlePageVectors.png" alt="" />
            </div> */}
            <h2 id='projects' className={styles.headers}>Our <span>Projects</span></h2>
            <div
              className={styles.responsiveContainer}
              style={{
                maxHeight: totalHeight
              }}
            >
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.title}
                  imageUrl={project.imageUrl}
                  title={project.title}
                  description={project.description}
                  actionText={project.actionText}
                  actionLink={project.actionLink}
                  onHeightChange={handleCardHeightChange}
                />
              ))}
            </div>
            <div className={styles.showMoreContainer} >
              <button onClick={showMore}>
                {!showAllProjects ? "Show All Projects" : "Show less Projects"}
                {!showAllProjects ? <span><FiPlusCircle /></span> : <span><FiMinusCircle /></span>}
              </button>
            </div>
          </>
        )}

        {solutionsSectionShow && (
          <>
            <h2 id='solutions' className={styles.headers} >Our <span>Solutions</span></h2>

            <div className={styles.cardContainer}>
              {filteredSolutions.map(project => (
                <InfoCard
                  key={project.title}
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  actionText={project.actionText}
                />
              ))}
            </div>
          </>
        )}

        {servicesSectionShow && (
          <>
            <h2 id='services' className={styles.headers} >Our <span>Services</span></h2>

            <div className={styles.cardContainer}>
              {filteredServices.map(service => (
                <InfoCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  actionText={service.actionText}
                />
              ))}
            </div>
          </>
        )}

        {teamSectionShow && (
          <>
            <h2 className={styles.headers}>Meet the <span>Team</span></h2>

            <div className={styles.teamContainer}>
              {filteredTeam.map(project => (
                <TeamMemberCard
                  key={project.title}
                  imageUrl={project.imageUrl}
                  name={project.title}
                  description={project.description}
                  isPremium={project.isPremium}
                />
              ))}
            </div>
          </>
        )}

        {contactSectionShow && (
          <>
            <h2 id='contact' className={styles.headers}>Contact <span>Us</span></h2>
            <Contact />
          </>
        )}
      </div>
    </div>
  );
}
