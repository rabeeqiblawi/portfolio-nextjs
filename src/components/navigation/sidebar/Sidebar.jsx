'use client'

import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import NavigationStore from '../NavigationStore.js';
import { IoMdClose } from "react-icons/io";
import links from '../links.js';
import './Sidebar.scss';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { config as websiteInformation } from '@/config'


const Sidebar = ({ logo, children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(NavigationStore.isSidebarOpen);

    useEffect(() => {
        setIsSidebarOpen(NavigationStore.isSidebarOpen);
    }, [NavigationStore.isSidebarOpen]);

    const handleSidebarClose = () => {
        NavigationStore.closeSidebar();
    };

    return isSidebarOpen ? (
        <div className="sidebar">
            <div className="sidebar-header">
                {logo && <div className="sidebar-logo">{logo}</div>}
                <button className="sidebar-close" onClick={handleSidebarClose}>
                    <IoMdClose />
                </button>
                <div className="logoDiv">
                    <Link href="/" className="logoLink">
                        <Image src={websiteInformation.content.logo} alt="" width={60} height={60} className="imgLogo"/>
                        <h1>{websiteInformation.content.brand}</h1>
                    </Link>
                </div>
            </div>
            <nav className="sidebar-nav">
                <div className="sidebar-injected-content">
                    {children}
                </div>
                {children ? null : (
                    <ul className="sidebar-links">
                        {links.map(link => (
                            <li key={link.path} className="sidebar-link-item">
                                <a href={link.path} className="sidebar-link">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    ) : null;
};

export default observer(Sidebar);