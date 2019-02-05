import React from 'react'

type ListProps = {
  // children: React.ReactNode;
  className?: string;
  type: 'inline' | 'unstyled';
}

export class List extends React.PureComponent<ListProps, {}> {
  generateClasses = () => {
    return this.props.className !== undefined ? this.props.className : undefined
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
        type = undefined
        break
    }

    return type
  }

  render() {
    return <ul className={this.generateClasses() !== null || this.getType() !== null ? [this.generateClasses(), this.getType()].join('') : undefined}>
      {this.props.children}
    </ul>
  }
}
