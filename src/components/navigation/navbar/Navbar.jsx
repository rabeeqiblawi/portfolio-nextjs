'use client';

import React from 'react';
import Link from 'next/link';
import links from '../links.js';
import styles from './navbar.module.css';
import { config } from '@/config.js';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import NavigationStore from '../NavigationStore.js';


import { observer } from 'mobx-react';

const Navbar = observer(() => {
    return (
        <div className={styles.container}>
            <div className={styles.burgerMenu} onClick={() => { NavigationStore.openSidebar() }} >
                <FaBars />
            </div>
            <div className={styles.logo}>
                Choroid
            </div>
            <nav>
                <ul>
                    {links.map((link) => (
                        <li key={link.path}>
                            {/* Updated Link usage */}
                            <Link href={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
});

export default Navbar;