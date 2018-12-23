import React from 'react'

export class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <a className="navbar-brand" href="#!">
              <img src="" alt="" /> Material
            </a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                  <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                  <button className="nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
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
