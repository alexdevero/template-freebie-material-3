import React from 'react'

import { Layout } from '../components/layout'

class StyleguidePage extends React.PureComponent {
  state = {
    isProActive: false
  }

  handleProSwitch = () => {
    this.setState({
      isProActive: !this.state.isProActive
    })
  }

  render () {
    return(
      <Layout pageTitle="Styleguide">
        <section className="hero">
          <h1>Material 3.0 </h1>

          <h2>All components</h2>

          <div className="custom-control custom-switch" onClick={this.handleProSwitch}>
            <input type="checkbox" className="custom-control-input" id="customSwitch1" />

            <label className="custom-control-label" for="customSwitch1">Show PRO version</label>
          </div>
        </section>

        <section>
          <h1>Basic elements</h1>
        </section>

        <section>
          <h1>Navigation</h1>
        </section>

        <section>
          <h1>Notifications</h1>
        </section>

        <section>
          <h1>Footers</h1>
        </section>

        <section>
          <h1>Typography</h1>
        </section>

        <section>
          <h1>Content Areas</h1>
        </section>

        <section>
          <h1>Cards</h1>
        </section>

        <section>
          <h1>Morphing Cards</h1>
        </section>

        <section>
          <h1>JavaScript</h1>
        </section>
      </Layout>
    )
  }
}

export default StyleguidePage
