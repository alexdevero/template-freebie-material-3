import React from 'react'
import PropTypes from 'prop-types'

export class Jumbotron extends React.PureComponent {
  render() {
    return <section className={`jumbotron jumbotron-${this.props.type === undefined ? 'default' : this.props.type}${this.props.isFluid ? ' jumbotron-fluid' : ''}${this.props.className !== undefined && this.props.className.length > 0 ? ' ' + this.props.className : ''}`}>
      <div className="container">{this.props.children}</div>
    </section>
  }
}

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isFluid: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'xlarge', 'full-height'])
}
