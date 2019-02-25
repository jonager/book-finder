import React, { Component } from 'react';
import styles from './Books.module.css';

import BookCard from '../../Components/BookCard/BookCard';

class Books extends Component {
    state = {};
    render() {
        let bookCards = null;
        bookCards = this.props.books.map(item => {
            return <BookCard key={item.id} bookInfo={item} />;
        });
        return <div className={styles.Books}>{bookCards}</div>;
    }
}

export default Books;
