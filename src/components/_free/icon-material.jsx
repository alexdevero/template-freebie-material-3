import React from 'react'
import PropTypes from 'prop-types'

export class IconMaterial extends React.PureComponent {
  generateSize = () => {
    let iconSize = ''

    switch (this.props.size) {
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
    return <span className={this.generateSize() + this.generateStyle() + this.generateActivity() + `material-icons${this.props.className !== undefined ? ` ${this.props.className}` : ''}`} aria-hidden={true}>
      {this.props.name}
    </span>
  }
}

IconMaterial.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['18', '24', '36', '48']),
  style: PropTypes.oneOf(['dark', 'light'])
}
