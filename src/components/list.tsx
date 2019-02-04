import React from 'react'

type ListProps = {
  // children: React.ReactNode;
  type: 'inline' | 'unstyled';
}

export class List extends React.PureComponent<ListProps, {}> {
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
