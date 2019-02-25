import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Header__left}>
                <span className={styles.Header__logo}>
                    <a href="/">book-finder</a>{' '}
                </span>
            </div>
            <nav className={styles.Header__nav}>
                <ul className={styles.Header__list}>
                    <li className={styles.Header__item}>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/jonager">
                            <i class="fab fa-github" />
                        </a>{' '}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
