import React from 'react'
// import { Link } from 'react-router-dom'

export const PresentationPanel = ({ colorClickHandler, panelToggleHandler, state} : {[key:string]:any}) => {
  return(
    <section className={`options-panel ${state.isPresentationPanelVisible ? 'options-panel--opened' : 'options-panel--closed'}`}>
      {/* Panel Button */}
      <button className="panel__button" onClick={panelToggleHandler}>Options</button>

      {/* Color Options  */}
      <div className="area">
        <h5 className="panel__heading">Color Options</h5>

        <span onClick={(event) => colorClickHandler(event)} title="blue" className="switch blue" />
        <span onClick={(event) => colorClickHandler(event)} title="gray" className="switch gray" />
        <span onClick={(event) => colorClickHandler(event)} title="orange" className="switch orange" />
        <span onClick={(event) => colorClickHandler(event)} title="purple" className="switch purple" />
        <span onClick={(event) => colorClickHandler(event)} title="green" className="switch green" />
        <span onClick={(event) => colorClickHandler(event)} title="yellow" className="switch yellow" />
        <span onClick={(event) => colorClickHandler(event)} title="red" className="switch red" />
        <span onClick={(event) => colorClickHandler(event)} title="blue-gray" className="switch blue-gray" />
        <span onClick={(event) => colorClickHandler(event)} title="blue-light" className="switch blue-light" />
        <span onClick={(event) => colorClickHandler(event)} title="cyan" className="switch cyan" />
        <span onClick={(event) => colorClickHandler(event)} title="orange-deep" className="switch orange-deep" />
        <span onClick={(event) => colorClickHandler(event)} title="green-light" className="switch green-light" />
        <span onClick={(event) => colorClickHandler(event)} title="amber" className="switch amber" />
        <span onClick={(event) => colorClickHandler(event)} title="indigo" className="switch indigo" />
        <span onClick={(event) => colorClickHandler(event)} title="teal" className="switch teal" />
        <span onClick={(event) => colorClickHandler(event)} title="pink" className="switch pink" />
      </div>{/* end panel area */}

      {/* Theme (Light Dark */}
      <div className="area">
        <h5 className="panel__heading">Theme Options</h5>

        <span onClick={(event) => colorClickHandler(event)} title="dark" className="switch switch--theme dark" />
        <span onClick={(event) => colorClickHandler(event)} title="light" className="switch switch--theme light" />
      </div>{/* end panel area */}

      {/* Header Templates *-/}
      <div className="area">
        <h5 className="panel__heading">Home Templates</h5>

        <Link to="/home-parallax">Parallax background</Link>

        <Link to="/home-slider">Full screen slider</Link>

        <Link to="/home-video">Full-screen video</Link>

        <Link to="/home-pattern">Pattern background</Link>
      </div>{/* end panel area */}

      {/* Pages *-/}
      <div className="area">
        <h5 className="panel__heading">Pages</h5>

        <Link to="/404">404</Link>

        <Link to="/about">About</Link>

        <Link to="/blog">Blog</Link>

        <Link to="/blog-post">Blog post</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/portfolio">Portfolio</Link>

        <Link to="/services">Services</Link>

        <Link to="/styleguide">Styleguide</Link>
      </div>{/* end panel area */}
    </section>
  )
}
