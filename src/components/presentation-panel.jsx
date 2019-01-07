import React from 'react'
import { Link } from 'react-router-dom'

export const PresentationPanel = ({ colorClickHandler, panelToggleHandler, state}) => {
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

      {/* Header Templates */}
      <div className="area">
        <h5 className="panel__heading">Home Templates</h5>

        <select defaultValue="">
          <option>
            <Link to="/">Parallax Background</Link>
          </option>

          <option>
            <Link to="/">Full Screen Slider</Link>
          </option>

          <option>
            <Link to="/">Slow Zoom Background</Link>
          </option>

          <option>
            <Link to="/">Full Screen Video</Link>
          </option>

          <option>
            <Link to="/">Pattern Background</Link>
          </option>
        </select>
      </div>{/* end panel area */}
    </section>
  )
}
