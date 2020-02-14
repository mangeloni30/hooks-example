import React from 'react'
import './Header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="icons-container__header">
        <div className="titles-container__div">
          <i class="fab fa-facebook" />
          <i class="fab fa-twitter" />
          <i class="fab fa-linkedin" />
          <i class="fab fa-github" />
          <i class="fab fa-pinterest" />
          <i class="fab fa-youtube" />
        </div>
      </header>
    )
  }
}

export default Header