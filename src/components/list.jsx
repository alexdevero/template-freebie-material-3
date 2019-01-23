import React from 'react'
import PropTypes from 'prop-types'

export class List extends React.PureComponent {
  generateClasses = () => {
    return this.props.className !== undefined ? this.props.className : null
  }

  getType = () => {
    let type

    switch (this.props.type) {
      case 'inline':
        type = `${this.props.className !== undefined ? ' list-inline' : 'list-inline'}`
        break

      case 'unstyled':
        type = `${this.props.className !== undefined ? ' list-unstyled' : 'list-unstyled'}`
        break

      default:
        type = null
        break
    }

    return type
  }

  render() {
    return <ul className={this.generateClasses() !== null || this.getType() !== null ? [this.generateClasses(), this.getType()].join('') : null}>
      {this.props.children}
    </ul>
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['inline', 'unstyled'])
}
