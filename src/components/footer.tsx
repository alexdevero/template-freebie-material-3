import React from 'react'
import { Link } from 'react-router-dom'

import { List } from '../components/list'

export class Footer extends React.PureComponent {
  render() {
    return <footer>
      <List type="inline">
        <li>
          <Link to="/404">
            NotFound
          </Link>
        </li>

        <li>
          <Link to="/about">
            About
          </Link>
        </li>

        <li>
          <Link to="/blog-post">
            BlogPost
          </Link>
        </li>

        <li>
          <Link to="/blog">
            Blog
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/index">
            Index
          </Link>
        </li>

        <li>
          <Link to="/portfolio">
            Portfolio
          </Link>
        </li>

        <li>
          <Link to="/services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/styleguide">
            Styleguide
          </Link>
        </li>
      </List>
    </footer>
  }
}
