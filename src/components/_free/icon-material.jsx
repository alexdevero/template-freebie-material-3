// Icons: https://material.io/tools/icons/?style=baseline

import React from 'react'
import PropTypes from 'prop-types'

export class IconMaterial extends React.PureComponent {
  generateSize = () => {
    let iconSize = ''

    /* switch (this.props.size) {
      case '18':
        iconSize = 'material-icons-18 '
        break
      case '24':
        iconSize = 'material-icons-24 '
        break
      case '36':
        iconSize = 'material-icons-36 '
        break
      case '48':
        iconSize = 'material-icons-48 '
        break
      default:
        iconSize = ''
    } */

    switch (this.props.size) {
      case 'xs':
        iconSize = ' material-icons-xs'
        break;
      case 'sm':
        iconSize = ' material-icons-sm'
        break;
      case 'lg':
        iconSize = ' material-icons-lg'
        break;
      case '2x':
        iconSize = ' material-icons-2x'
        break;
      case '3x':
        iconSize = ' material-icons-3x'
        break;
      case '4x':
        iconSize = ' material-icons-4x'
        break;
      case '5x':
        iconSize = ' material-icons-5x'
        break;
      case '6x':
        iconSize = ' material-icons-6x'
        break;
      case '7x':
        iconSize = ' material-icons-7x'
        break;
      case '8x':
        iconSize = ' material-icons-8x'
        break;
      case '9x':
        iconSize = ' material-icons-9x'
        break;
      case '10x':
        iconSize = ' material-icons-10x'
        break;
      default:
        iconSize = ''
    }

    return iconSize
  }

  generateStyle = () => {
    let iconStyle = ''

    switch (this.props.style) {
      case 'light':
        iconStyle = 'material-icons-light '
        break
      case 'dark':
        iconStyle = 'material-icons-dark '
        break
      default:
        iconStyle = ''
    }

    return iconStyle
  }

  generateActivity = () => {
    let iconActive = ''

    switch (this.props.active) {
      case true:
        iconActive = 'material-icons-active '
        break
      case false:
        iconActive = 'material-icons-inactive '
        break
      default:
        iconActive = ''
    }

    return iconActive
  }

  render() {
    return <span className={`material-icons${this.props.className !== undefined ? ` ${this.props.className}` : ''}` + this.generateStyle() + this.generateSize() + this.generateActivity()} aria-hidden={true}>
      {this.props.name}
    </span>
  }
}

IconMaterial.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  // size: PropTypes.oneOf(['18', '24', '36', '48']),
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  style: PropTypes.oneOf(['dark', 'light'])
}
