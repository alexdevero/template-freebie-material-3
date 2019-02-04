import React from 'react'

type SectionProps = {
  // children: React.ReactNode;
  container: 'default' | 'fluid' | 'none';
}

export class Section extends React.PureComponent<SectionProps, {}> {
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
