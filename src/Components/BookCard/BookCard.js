import React from 'react';
import styles from './BookCard.module.css';
import BookCover from '../../book-placeholder.png';

const BookCard = props => {
    let bookCover = props.bookInfo.volumeInfo.imageLinks;
    let bookTitle = props.bookInfo.volumeInfo.title;
    let bookAuthor = props.bookInfo.volumeInfo.authors;
    let bookPublisher = props.bookInfo.volumeInfo.publisher;

    return (
        <div className={styles.BookCard}>
            <img
                src={bookCover ? bookCover.thumbnail : BookCover}
                alt="book cover"
            />
            <div className={styles.BookInfo}>
                <h2
                    onClick={() => {
                        props.getBook(props.bookInfo.id);
                    }}>
                    {bookTitle
                        ? bookTitle.length > 40
                            ? bookTitle.slice(0, 40) + '...'
                            : bookTitle
                        : 'N/A'}
                </h2>
                <p>{bookAuthor ? bookAuthor[0] : 'N/A'}</p>
                <p>{bookPublisher ? bookPublisher : 'N/A'}</p>
            </div>
        </div>
    );
};

export default BookCard;
