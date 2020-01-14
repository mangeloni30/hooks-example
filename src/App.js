import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [name, setMyName] = useState('No name');
  const [colorClass, setColorClass] = useState('button__div');

  /**
   * @name clickHandler
   * method responsible of change the name
   * with react hooks given a parameter 
   * @param {string} name
   * @memberof App
   * @author Martin Angeloni
   */
  const clickHandler = (name) => {
    setMyName(name);
    setColorClass('button__div button__div--green')
  };

    /**
     *  @name useEffect
     *  method responsible of set the name state
     *  call only once
     *  React Hooks method
     * @author Martin Angeloni
     */      
    useEffect(() => {
      setMyName('useEffectWithoutName');
    }, []);

  return (
    <div className="App">
      <div className="button-text__div--container">
        <i class="fas fa-thumbs-up fa-5x"></i>
        <button 
          className={colorClass}
          type="button"
          onClick={()=>{clickHandler('Martin')}}
        >
          Clickme to see the power of react hooks
        </button>  
        <p className="text__p--color">
          {`Click here to change my name!: ${name}`}
        </p>
      </div>
    </div>
  );
}

export default App;
