import React from 'react';
import styles from './BookCard.module.css';

const BookCard = props => {
    return (
        <div className={styles.BookCard}>
            <img
                src={props.bookInfo.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
            />
            <div className={styles.BookInfo}>
                <h2>{props.bookInfo.volumeInfo.title}</h2>
                <p>{props.bookInfo.volumeInfo.authors[0]}</p>
                <p>{props.bookInfo.volumeInfo.publisher}</p>
            </div>
        </div>
    );
};

export default BookCard;
