import React from 'react';
import './MyName.scss';
import { useState, useEffect } from 'react';

function App() {
  const [name, setMyName] = useState('');
  const [colorClass, setColorClass] = useState('button__div');
  const [classIcon, setClassIcon] = useState('fas fa-thumbs-down fa-2x');
  const [isClicked, setIsClicked] = useState(false);

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
    setClassIcon('fas fa-thumbs-up fa-2x')
    setIsClicked(true)
  };

    /**
     * @name useEffect
     * method responsible of set the name state
     * call only once
     * React Hooks method
     * @author Martin Angeloni
     */      
    useEffect(() => {
      setMyName('...');
    }, []);

  return (
    <div className="App">
      <div className="button-text__div--container">
        <p>Click on the button below to know my name</p>
        <div className="button-icon__div--container">
          <button 
            className={colorClass}
            type="button"
            onClick={()=>{clickHandler('Martin Angeloni')}}
          >
            Clickme to see the power of react hooks
          </button>
        </div>
        <i class={`${classIcon}`} />
        <p className="text__p--color">
          {`My name is: ${name}`}
        </p>
        {isClicked && (
        <button className="my-experience__button my-experience__button--not-clicked">
          My experience
        </button>
      )}
      </div>
    </div>
  );
}

export default App;
