import React from 'react';
import Header from '../header/Header'
import MyName from '../myname/MyName'

// import { useState, useEffect } from 'react';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MyName />
      </React.Fragment>
    )
  }
}

export default Main