import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Books from '../Books/Books';
import SearchBar from '../../Components/SearchBar/SearchBar';

import styles from './Search.module.css';

class Search extends Component {
    state = {
        books: null,
        alert: 'Nothing here yet!'
    };

    timeout = null;

    getBooks = searchQuery => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=AIzaSyB9jhnttqyetAlMMosPaeVlSg19woZyovo&maxResults=20`
            )
            .then(response => {
                if (response.data.totalItems === 0) {
                    this.setState({
                        alert: 'No results found'
                    });
                } else {
                    this.setState({
                        books: response.data.items
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    inputHandler = event => {
        event.persist();
        if (event.target.value.trim() === '' && event.target.value.length > 0) {
            this.setState({
                alert: 'Please enter a book title'
            });
            return;
        } else if (event.target.value.trim() === '') {
            this.setState({
                alert: 'Nothing here yet!'
            });
            return;
        }
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.getBooks(event.target.value);
        }, 1000);
    };

    render() {
        return (
            <main className={styles.Main}>
                <SearchBar inputHandler={this.inputHandler} />
                {!this.state.books ? (
                    <h2 className={styles.Alert}>{this.state.alert}</h2>
                ) : null}
                {this.state.books ? <Books books={this.state.books} /> : null}
            </main>
        );
    }
}

export default withRouter(Search);
