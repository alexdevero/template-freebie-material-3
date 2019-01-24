import React from 'react'
import PropTypes from 'prop-types'

export class GridRow extends React.PureComponent {
  render() {
    return <div className={this.props.className !== undefined ? `row ${this.props.className}` : 'row'}>
      {this.props.children}
    </div>
  }
}

GridRow.propTypes = {
  children: PropTypes.node
}
