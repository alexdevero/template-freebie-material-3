import React from 'react'
import PropTypes from 'prop-types'

type JumbotronProps = {
  // children: React.ReactNode
  className?: string;
  isFluid?: boolean;
  type: 'default' | 'small' | 'medium' | 'large' | 'xlarge' | 'full-height';
}

export class Jumbotron extends React.PureComponent<JumbotronProps, {}> {
  render() {
    return <section className={`jumbotron jumbotron-${this.props.type === undefined ? 'default' : this.props.type}${this.props.isFluid ? ' jumbotron-fluid' : ''}${this.props.className !== undefined && this.props.className.length > 0 ? ' ' + this.props.className : ''}`}>
      <div className="container">{this.props.children}</div>
    </section>
  }
}
