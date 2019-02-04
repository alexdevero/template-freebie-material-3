import React from 'react'

type GridRowProps = {
  // children: React.ReactNode
}

export class GridRow extends React.PureComponent<GridRowProps, {}> {
  render() {
    return <div className={this.props.className !== undefined ? `row ${this.props.className}` : 'row'}>
      {this.props.children}
    </div>
  }
}
