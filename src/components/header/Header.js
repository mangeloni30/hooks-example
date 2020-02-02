import React from 'react'
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="titles-container__div">
          <h1>Hi, I'm Martin Angeloni, FrontEnd Developer</h1>
          {/* <h2>FrontEnd developer</h2> */}
        </div>
        <img className="profile-img" />
      </header>
    )
  }
}

export default Header