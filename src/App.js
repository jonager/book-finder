import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Search from './Containers/Search/Search';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Search />
            </React.Fragment>
        );
    }
}

export default App;
