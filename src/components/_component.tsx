import React from 'react'

type ComponentExampleProps = {
  type: '';
  name?: string;
}

export class ComponentExample extends React.PureComponent<ComponentExampleProps, {}> {
  render() {
    return <div />
  }
}
