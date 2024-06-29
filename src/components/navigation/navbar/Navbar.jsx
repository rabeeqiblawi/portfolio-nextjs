'use client';

import React from 'react';
import Link from 'next/link';
import links from '../links.js';
import styles from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import NavigationStore from '../NavigationStore.js';

import { observer } from 'mobx-react';

const Navbar = observer(() => {
    return (
        <>
            <div className={styles.topPageVectors}>
                <img src="/topPageVectors.png" alt="" />
            </div>
            <div className={styles.blueOverlay}></div>
            <div className={styles.container}>
                <div className={styles.burgerMenu} onClick={() => { NavigationStore.openSidebar() }} >
                    <FaBars />
                </div>
                <div className={styles.logo}>
                    <h1>choroid</h1>
                </div>
                <div className={styles.links}>
                    {links.map((link) => (
                        <Link href={link.path} key={link.path}>{link.title}</Link>
                    ))}
                </div>
                <div className={styles.bigButtons}>
                    <button>View Our Work</button>
                    <button>Hire Us</button>
                </div>
            </div>
        </>
    );
});

export default Navbar;