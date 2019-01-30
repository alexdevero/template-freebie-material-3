import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-md">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src="" alt="" /> Material
            </Link>

            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse offcanvas-collapse offcanvas-collapse-right justify-content-end" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Components
                  </button>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>

                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>

                    <div className="dropdown-divider" />

                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sections
                  </button>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#!">
                      Action
                    </a>

                    <a className="dropdown-item" href="#!">
                      Another action
                    </a>

                    <div className="dropdown-divider" />

                    <a className="dropdown-item" href="#!">
                      Something else here
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle btn btn-link" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </button>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/" className="dropdown-item">Home</Link>

                    <Link to="/404" className="dropdown-item">404</Link>

                    <Link to="/about" className="dropdown-item">About</Link>

                    <Link to="/blog" className="dropdown-item">Blog</Link>

                    <Link to="/blog-post" className="dropdown-item">Blog post</Link>

                    <Link to="/contact" className="dropdown-item">Contact</Link>

                    <Link to="/portfolio" className="dropdown-item">Portfolio</Link>

                    <Link to="/services" className="dropdown-item">Services</Link>

                    <Link to="/styleguide" className="dropdown-item">Styleguide</Link>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Buy now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
