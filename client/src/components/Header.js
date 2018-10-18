import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav>
        <div class='nav-wrapper'>
          <a href='#Email' class='brand-logo'>Emaily</a>
          <ul id='nav-mobile' class='right'>
            <li>
              <a href='collapsible.html'>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
