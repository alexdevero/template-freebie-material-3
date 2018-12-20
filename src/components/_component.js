import React from 'react'
import PropTypes from 'prop-types'

export class ComponentExample extends React.PureComponent {
  render() {
    return <div />
  }
}

ComponentExample.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['']).isRequired,
  name: PropTypes.string,
}
