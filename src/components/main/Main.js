import React from 'react';
import Header from '../header/Header'
import MainApp from '../mainApp/MainApp'
import FastAccess from '../fastAccess/FastAccess'

// import { useState, useEffect } from 'react';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainApp />
      </React.Fragment>
    )
  }
}

export default Main