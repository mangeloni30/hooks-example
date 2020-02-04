import React from 'react';
import './MainApp.scss';
import { useState, useEffect } from 'react';
import InformationBox from '../informationBox/InformationBox'
import FastAccess from '../fastAccess/FastAccess'

/**
 * MyName
 * @returns 
 */
const MainApp = () => {

  const intormation = 'Im working as Front End Developer with React, Redux, Redux-Sagas, Redux-Thunk, NodeJS, SASS, LESS and another frameworks. Also Im a proactive team mate and always open to learn new frameworks and all related with programming. I love to help and teach others in the work environment'
  const title = 'About me'
  const informationTwo = 'My principal talent is use technologies such as react, react-redux, redux-thunk redux-sagas for the best performance and practice. For me the quality is not negotiable, because I really believe that in that way is easy to preven future bugs and also the code is more understandable for anybody'
  const informationThree = `I'm thinking in learn react native and VueJS. 
  Practice doing repositories in my personal github account.`

  return (
    <div className="App">
      <FastAccess />
      <div className="main-container__div">
        <InformationBox 
          title={title}
          information={intormation}
        />
        <InformationBox 
          title={'What I can do'}
          information={informationTwo}
        />
        <InformationBox 
          title={`What's next for me?`}
          information={informationThree}
        />
      </div>
    </div>
  );
}

export default MainApp;
