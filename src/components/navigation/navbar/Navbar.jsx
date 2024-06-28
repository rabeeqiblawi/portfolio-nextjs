import React from 'react';
import Link from 'next/link';
import links from '../links.js';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                LOGO
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
};

export default Navbar;