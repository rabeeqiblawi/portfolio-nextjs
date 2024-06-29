'use client';

import React from 'react';
import Link from 'next/link';
import links from '../links.js';
import styles from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import NavigationStore from '../NavigationStore.js';

import { observer } from 'mobx-react';
import Image from 'next/image';
import { config as websiteInformation } from '@/config'


const Navbar = observer(() => {
    return (
        <>
            <div className={styles.topPageVectors}>
                <img src="/topPageVectors.png" alt="" />
            </div>
            <div className={styles.overlayColor}></div>
            <div className={styles.container}>
                <div className={styles.burgerMenu} onClick={() => { NavigationStore.openSidebar() }} >
                    <FaBars />
                </div>
                <div className={styles.logoDiv}>
                    <Link href="/" className={styles.logoLink}>
                        <Image src={websiteInformation.content.logo} alt="" width={20} height={20} className={styles.imgLogo}/>
                        <h1>{websiteInformation.content.brand}</h1>
                    </Link>
                </div>
                <div className={styles.links}>
                    {links.map((link) => (
                        <Link href={link.path} key={link.path}>{link.title}</Link>
                    ))}
                </div>
            </div>
        </>
    );
});

export default Navbar;