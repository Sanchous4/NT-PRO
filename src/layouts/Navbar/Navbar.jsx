import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import {cx} from '../../utils';

import styles from './Navbar.module.css';

const NavbarTitles = [
    {name: 'Trading', link: '/'},
    {name: 'Archive', link: '/archive'},
];

const Navbar = () => {
    const {pathname: currentPath} = useLocation();

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {NavbarTitles.map((title, index) => (
                    <li
                        className={cx(
                            currentPath === title.link && styles.active_tab,
                            index === 0 && styles.first_active_tab
                        )}
                        key={title.name}
                    >
                        <Link className={styles.navbar__link} to={title.link}>
                            {title.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
