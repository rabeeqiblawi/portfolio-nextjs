'use client'
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import NavigationStore from '../NavigationStore.js/index.js';
import { IoMdClose } from "react-icons/io";
import links from '../links.js'; // Import links

const Sidebar = ({ logo, children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(NavigationStore.isSidebarOpen);

    useEffect(() => {
        console.log(NavigationStore.isSidebarOpen);
        setIsSidebarOpen(NavigationStore.isSidebarOpen);
    }, [NavigationStore.isSidebarOpen]); 

    const handleSidebarClose = () => {
        NavigationStore.closeSidebar();
    };

    return isSidebarOpen ? (
        <div style={{ backgroundColor: 'red' }}>
            <div>
                {/* <div>{logo}</div> */}
                <div></div>
                <div onClick={handleSidebarClose}>
                    <IoMdClose />
                </div>
            </div>
            <nav>
                {children}
                <ul>
                    {links.map(link => (
                        <li key={link.path}>
                            <a href={link.path}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    ) : null;
};

export default observer(Sidebar);
