import React from 'react'
import PropTypes from 'prop-types'

export class Section extends React.PureComponent {
  generateClasses = () => {
    return this.props.className !== undefined ? this.props.className : null
  }

  renderContainer = () => {
    let container

    switch (this.props.container) {
      case 'default':
        container = <div className="container">{this.props.children}</div>
        break

      case 'fluid':
        container = <div className="container-fluid">{this.props.children}</div>
        break

      case 'none':
        container = <>{this.props.children}</>
        break

      default:
        container = <>{this.props.children}</>
        break
    }

    return container
  }

  render() {
    return <section className={this.generateClasses()}>
      {this.renderContainer()}
    </section>
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.oneOf(['default', 'fluid', 'none']).isRequired
}
