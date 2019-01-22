import React from 'react'
import PropTypes from 'prop-types'

export class IconAwesome extends React.PureComponent {
  generateSize = () => {
    let iconSize = ''

    switch (this.props.size) {
      case 'xs':
        iconSize = 'fa-xs'
        break;
      case 'sm':
        iconSize = 'fa-sm'
        break;
      case 'lg':
        iconSize = 'fa-lg'
        break;
      case '2x':
        iconSize = 'fa-2x'
        break;
      case '3x':
        iconSize = 'fa-3x'
        break;
      case '4x':
        iconSize = 'fa-4x'
        break;
      case '5x':
        iconSize = 'fa-5x'
        break;
      case '6x':
        iconSize = 'fa-6x'
        break;
      case '7x':
        iconSize = 'fa-7x'
        break;
      case '8x':
        iconSize = 'fa-8x'
        break;
      case '9x':
        iconSize = 'fa-9x'
        break;
      case '10x':
        iconSize = 'fa-10x'
        break;
      default:
        iconSize = ''
    }

    return iconSize
  }

  render() {
    return <span className={this.generateSize() + `fa${this.props.type.substring(0, 1).toLowerCase()} fa-${this.props.name} ${this.props.className !== undefined ? this.props.className : ''}`} aria-hidden={true} />
  }
}

IconAwesome.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['']),
  type: PropTypes.oneOf(['brand', 'light', 'regular', 'solid']).isRequired
}
