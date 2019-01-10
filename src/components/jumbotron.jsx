import React from 'react'
import PropTypes from 'prop-types'

export class Jumbotron extends React.PureComponent {
  render() {
    return <section className={`jumbotron jumbotron-${this.props.type} ${this.props.isFluid ? 'jumbotron-fluid' : ''}`}>
      <div className="container">{this.props.children}</div>
    </section>
  }
}

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'xlarge', 'full-height']),
  isFluid: PropTypes.bool
}
