import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = props => {
    return (
        <input
            className={styles.SearchBar}
            onKeyUp={props.inputHandler}
            placeholder="Search for a book..."
            type="text"
        />
    );
};

export default SearchBar;
