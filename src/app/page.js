"use client"

import MainSection from '@/components/showcasing/MainSection';
import styles from './Home.module.css'
import { config as websiteInformation } from '@/config'

import React, { useEffect, useState } from 'react';

import CoreFeatures from '@/components/CoreFeatures/CoreFeatures';
import About from '@/components/about/about';
import Contact from '@/components/contact/Contact'
import Testimonial from '@/components/testimonial/Testimonial';
import Clients from '@/components/customerReviews/Clients';
import ClientProjects from '@/components/clientProjects/clientProjects';
import TeamSection from '@/components/teamSection/TeamSection';
import ServicesSection from '@/components/servicesSection/servicesSection';
import SolutionsSection from '@/components/solutionsSection/SolutionsSection';
import ProjectsSection from '@/components/projectsSection/projectsSection';

export default function Home() {
  const [filteredProjects, setFilteredProjects] = useState(websiteInformation.content.projects.data.filter(project => (project.visibleHome && !project.isHidden)));
  const [filteredClientProjects, setFilteredClientProjects] = useState(websiteInformation.content.clientProjects.data.filter(project => (project.visibleHome && !project.isHidden)));
  const filteredSolutions = websiteInformation.content.solutions.data.filter(project => project.visibleHome && !project.isHidden);
  const filteredServices = websiteInformation.content.services.data.filter(service => service.visibleHome && !service.isHidden);
  const filteredTeam = websiteInformation.content.team.members.filter(project => project.visibleHome && !project.isHidden);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <MainSection />

        <CoreFeatures />

        <About
          isHidden={websiteInformation.content.about.isHidden}
          title={websiteInformation.content.about.mainTitle}
          highlightedWord={websiteInformation.content.about.mainTitleHighlightedWord}
          description={websiteInformation.content.about.description}
          buttonText={websiteInformation.content.about.buttonText}
          buttonAction ={websiteInformation.content.about.buttonAction}
          aboutImageURL={websiteInformation.content.about.aboutImageURL}
        />

        <ProjectsSection
          isHidden={websiteInformation.content.projects.isHidden}
          headerTitle={websiteInformation.content.projects.mainTitle}
          headerHighlightedWord={websiteInformation.content.projects.mainTitleHighlightedWord}
          headerID='projects'
          filteredProjects={filteredProjects}
          allProjects={websiteInformation.content.projects.data.filter(project => !project.isHidden)}
        />

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
