import React from 'react';
import './InformationBox.scss';
import { useState } from 'react';

/**
 * @method InformationBox
 * method responsible of render the content 
 * of an information box
 * @author Martin Angeloni
 * @returns {React.ReactNode}
 */
const InformationBox = (props) => {
  const [animationClass, setAnimationClass] = useState('');
  const [showContent, setShowContent] = useState(false);

  /** 
   * @method arrowTogle
   * method responsible of check the animation class state
   * and change it dependes of it for css animations effects
   * @author Martin Angeloni
  */  
  const arrowTogle = () => {
    if(animationClass !== 'arrow-down') {
      setAnimationClass('arrow-down');
      setShowContent(true);
    } else {
      setAnimationClass('arrow-up');
      setShowContent(false);
    }
  }

  const informationClass = animationClass === 'arrow-down' ?
    'information-container__div--height' : ''

  return (
    <div className={`information-container__div ${informationClass}`}>
      <div className="about-me-container__div">
        <i 
          className={`fas fa-greater-than ${animationClass}`}
          onClick={arrowTogle}
        />
        <p>{props.title}</p>
      </div>
        {showContent && (
          <div className="about-me-content-container__div">
            <div className="background__div">
              <p>
                {props.information}
              </p>
            </div>
            <div className="front-content__div" />
          </div>
        )}
    </div>
  );
}

export default InformationBox;
