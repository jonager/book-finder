import React, { Component } from 'react';
import axios from 'axios';
import styles from './Books.module.css';

import BookCard from '../../Components/BookCard/BookCard';
import Modal from '../../Components/Modal/Modal';
import BookCover from '../../book-placeholder.png';

class Books extends Component {
    state = { book: null, show: false };

    toggleModal = () => {
        this.setState({
            show: !this.state.show
        });
    };

    getBook = id => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(response => {
                this.setState({
                    book: response.data
                });
            })
            .then(() => {
                this.toggleModal();
            })
            .catch(error => {
                console.log(error.data);
            });
    };

    render() {
        let bookCards = null,
            book = null;

        bookCards = this.props.books.map(item => {
            return (
                <BookCard
                    key={item.id}
                    getBook={this.getBook}
                    bookInfo={item}
                />
            );
        });

        if (this.state.book) {
            let bookCover = this.state.book.volumeInfo.imageLinks;
            let bookTitle = this.state.book.volumeInfo.title;
            let bookAuthor = this.state.book.volumeInfo.authors;
            let bookPublisher = this.state.book.volumeInfo.publisher;

            book = (
                <div className={styles.Book}>
                    <img
                        src={bookCover ? bookCover.thumbnail : BookCover}
                        alt="book cover"
                    />
                    <div className={styles.Book__info}>
                        <h2>{bookTitle ? bookTitle : 'N/A'}</h2>
                        <p>{bookAuthor ? bookAuthor[0] : 'N/A'}</p>
                        <p>{bookPublisher ? bookPublisher : 'N/A'}</p>
                        <div
                            className={styles.Book_description}
                            dangerouslySetInnerHTML={{
                                __html: this.state.book.volumeInfo.description
                            }}
                        />
                    </div>
                </div>
            );
        }

        return (
            <div className={styles.Books}>
                {bookCards}
                <Modal show={this.state.show} clicked={this.toggleModal}>
                    {book}
                </Modal>
            </div>
        );
    }
}

export default Books;
