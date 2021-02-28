import React, { Component } from 'react';

import Header from '../header/header';
import Footer from '../footer/footer';
import FotoContainer from '../foto-container/foto-container';

import './app.css';

export default class App extends Component {

  render() {

    return (
      <div className='main-block'>
        <Header />
        <FotoContainer openModalWindow={this.openModalWindow} />
        <Footer />
      </div>
    )
  };
};