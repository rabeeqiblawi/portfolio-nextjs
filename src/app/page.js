"use client"

import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import { config as websiteInformation } from '@/config'

import ProjectCard from '@/components/cards/ProjectCard';
import Contact from '@/components/contact/Contact'
import React, { useEffect, useState } from 'react';

import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import CoreFeatures from '@/components/CoreFeatures/CoreFeatures';
import About from '@/components/about/about';
import Testimonial from '@/components/testimonial/Testimonial';
import Clients from '@/components/customerReviews/Clients';
import ClientProjects from '@/components/clientProjects/clientProjects';
import TeamSection from '@/components/teamSection/TeamSection';
import ServicesSection from '@/components/servicesSection/servicesSection';
import SolutionsSection from '@/components/solutionsSection/SolutionsSection';

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(websiteInformation.content.projects.data.filter(project => (project.visibleHome && !project.isHidden)));
  const [filteredClientProjects, setFilteredClientProjects] = useState(websiteInformation.content.clientProjects.data.filter(project => (project.visibleHome && !project.isHidden)));
  const [showAllProjects, setshowAllProjects] = useState(false);
  const [projectHeight, setProjectHeight] = useState(460); // project height 
  const [numProjects, setNumProjects] = useState(filteredProjects.length);
  const [totalHeight, setTotalHeight] = useState(numProjects * projectHeight);


  const projectSectionShow = !websiteInformation.content.projects.isHidden;
  const filteredSolutions = websiteInformation.content.solutions.data.filter(project => project.visibleHome && !project.isHidden);
  const filteredServices = websiteInformation.content.services.data.filter(service => service.visibleHome && !service.isHidden);
  const filteredTeam = websiteInformation.content.team.members.filter(project => project.visibleHome && !project.isHidden);

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
        <CoreFeatures />
        <About />

        {projectSectionShow && (
          <>
            {/* <div className={styles.middlePageVectors}>
              <img src="/middlePageVectors.png" alt="" />
            </div> */}
            <h2 id='projects' className={styles.headers}>
                {websiteInformation.content.projects.mainTitle.split(' ').map((word, index) => (
                    <React.Fragment key={index}>
                        {websiteInformation.content.projects.mainTitleHighlightedWord.includes(word) ?
                            <span>{word}</span>
                            : ` ${word} `
                        }
                    </React.Fragment>
                ))}
            </h2>
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

        <SolutionsSection
          isHidden={websiteInformation.content.solutions.isHidden}
          headerTitle={websiteInformation.content.solutions.mainTitle}
          headerHighlightedWord={websiteInformation.content.solutions.mainTitleHighlightedWord}
          headerID='solutions'
          filteredSolutions={filteredSolutions}
        />

        <ServicesSection
          isHidden={websiteInformation.content.services.isHidden}
          headerTitle={websiteInformation.content.services.mainTitle}
          headerHighlightedWord={websiteInformation.content.services.mainTitleHighlightedWord}
          headerID='services'
          filteredServices={filteredServices}
        />

        <TeamSection 
            isHidden={websiteInformation.content.team.isHidden}
            headerTitle={websiteInformation.content.team.mainTitle}
            headerHighlightedWord={websiteInformation.content.team.mainTitleHighlightedWord}
            headerID='team'
            filteredTeam={filteredTeam}
        />
        <Contact 
          isHidden={websiteInformation.contact.isHidden}
          headerTitle={websiteInformation.contact.mainTitle}
          headerHighlightedWord={websiteInformation.contact.mainTitleHighlightedWord}
          headerID='contact'
          imageUrl={websiteInformation.contact.imageUrl}
          title={websiteInformation.contact.title}
          description={websiteInformation.contact.description}
          filteredContact={Object.entries(websiteInformation.contact.contactInfo).filter(([key, value]) => value !== '')}
          mail ={websiteInformation.contact.contactInfo.mail}
          buttonText ={websiteInformation.contact.buttonText}
        />
        <Clients 
          isHidden={websiteInformation.content.clients.isHidden}
          title={websiteInformation.content.clients.title}
          subtitle={websiteInformation.content.clients.subtitle}
          buttonText={websiteInformation.content.clients.buttonText}
          buttonAction={websiteInformation.content.clients.buttonAction}
          clientList={websiteInformation.content.clients.clientList}
        />
        <ClientProjects
          isHidden= {websiteInformation.content.clientProjects.isHidden}
          title={websiteInformation.content.clientProjects.mainTitle}
          highlightedWord= {websiteInformation.content.clientProjects.mainTitleHighlightedWord}
          filteredData={filteredClientProjects}
          allData={websiteInformation.content.clientProjects.data.filter(project => !project.isHidden)}
        />
        <Testimonial
          isHidden={websiteInformation.content.testimonial.isHidden}
          data={websiteInformation.content.testimonial.data}
        />
      </div>
    </div>
  );
}
