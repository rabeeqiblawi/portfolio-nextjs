"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import links from '../links.js';
import styles from './navbar.module.scss';
import { FaBars } from 'react-icons/fa';
import NavigationStore from '../NavigationStore.js';

import { observer } from 'mobx-react';
import Image from 'next/image';
import { config as websiteInformation } from '@/config'


const Navbar = observer(() => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos < 70) ||
            currentScrollPos < 10
        );

        if (currentScrollPos <= 175) {
            document.querySelector(`.${styles.container}`).classList.remove(styles.show);
        }

        setPrevScrollPos(currentScrollPos);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);
    return (
        <>
            <div className={`${styles.topPageVectors} ${!visible ? styles.hidden : styles.show}`}>
                <img src="/topPageVectors.png" alt="" />
            </div>
            <div className={styles.overlayColor}></div>
            <div className={`${styles.container} ${!visible ? styles.hidden : ''} ${prevScrollPos > 175 ? styles.show : ''}`}>
                <div className={styles.burgerMenu} onClick={() => { NavigationStore.openSidebar()}} >
                    <FaBars />
                </div>
                <div className={styles.logoDiv}>
                    <Link href="/" className={styles.logoLink}>
                        <Image src={websiteInformation.content.logo} alt="" width={60} height={60} className={styles.imgLogo}/>
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