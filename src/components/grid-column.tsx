import React from 'react'

type GridColumnProps = {
  className?: string;
  // children: React.ReactNode
  lg: string | number;
  md: string | number;
  sm: string | number;
  xl: string | number;
  xs: string | number;
}

export class GridColumn extends React.PureComponent<GridColumnProps, {}> {
  generateClasses = () => {
    let classes = []

    if (this.props.xs !== undefined || this.props.sm !== undefined || this.props.md !== undefined || this.props.lg !== undefined || this.props.xl !== undefined) {
      if (this.props.xs !== undefined) classes.push(`col-${this.props.xs}`)
      if (this.props.sm !== undefined) classes.push(`col-sm-${this.props.sm}`)
      if (this.props.md !== undefined) classes.push(`col-md-${this.props.md}`)
      if (this.props.lg !== undefined) classes.push(`col-lg-${this.props.lg}`)
      if (this.props.xl !== undefined) classes.push(`col-xl-${this.props.xl}`)
      if (this.props.className !== undefined) classes.push(this.props.className)

      return classes.join(' ')
    } else {
      (this.props.className !== undefined) && classes.push(this.props.className)
    }

    return classes.length !== 0 ? classes : ''
  }

  render() {
    return <div className={this.generateClasses()}>
      {this.props.children}
    </div>
  }
}
