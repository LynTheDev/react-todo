import React from 'react';

import "../styles/nav.scss"

const SideNav = () => {
      return (
          <nav className='animate'>
            <ul className='list'>
              <li>
                <button className='fixed button side-btn bottom-right'>
                  <p className='btn-text'>
                    +
                  </p>
                </button>
              </li>
            </ul>
          </nav>
      )
}

export default SideNav;