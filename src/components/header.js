import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <nav>
          <a href="#">
            <img src="" alt="" />
          </a>
          <ul>
            <li>
              <a href="http://">#</a>
            </li>
            <li>
              <a href="http://">#</a>
            </li>
            <li>
              <a href="http://">#</a>
            </li>
            <li>
              <a href="http://">#</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
}
