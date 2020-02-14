import React from 'react'
import './FastAccess.scss'

/** 
 * @method FastAccess
 * method responsible of render the content of fast access
 * @returns {React.ReactNode}
 * @author Martin Angeloni
*/
const FastAccess = () => {
  const toScrollArray = [
    'Home', 
    'About Me', 
    'My job', 
    'Plans', 
    'Portfolio', 
    'Blog', 
    'Contact'
  ]
  return (
    <div className="fast-access__div">
      <div className="fast-access__div-content">
        <i class="fas fa-user" />
        <p>I'm Martín - Web UI Developer</p>
      </div>
      <div className="to-scroll__div">
        {toScrollArray.map((item)=>{
          return (
            <div 
              className="to-scroll-item__div"
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FastAccess