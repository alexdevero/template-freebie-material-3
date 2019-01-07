import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

// Import pages
// import { 404 } from './pages/404'
// import { About } from './pages/about'
// import { BlogPost } from './pages/blog-post'
// import { Blog } from './pages/blog'
// import { Contact } from './pages/contact'
import IndexPage from './pages/index'
// import { Portfolio } from './pages/portfolio'
// import { Services } from './pages/services'
import StyleguidePage from './pages/styleguide'

// Import Presentation Panel for
import { PresentationPanel } from './components/presentation-panel'

// Import components

// Import main CSS stylesheet
import './styles/styles.css'

class App extends React.Component {
  state = {
    activeThemeColor: 'blue',
    isPresentationPanelVisible: false,
  }

  handleThemeColorChange = (event) => {
    this.setState({
      activeThemeColor: `${event.target.title}`
    })
  }

  handlePresentationPanelToggle = () => {
    this.setState({
      isPresentationPanelVisible: !this.state.isPresentationPanelVisible
    })
  }

  render () {
    return(
      <BrowserRouter>
        <React.Fragment>
          <PresentationPanel state={this.state} colorClickHandler={this.handleThemeColorChange} panelToggleHandler={this.handlePresentationPanelToggle} />

          <Route path="/" component={IndexPage} exact={true} />

          {/* <Route path="/404" component={404} /> */}
          {/* <Route path="/about" component={About} /> */}
          {/* <Route path="/blogPost" component={BlogPost} /> */}
          {/* <Route path="/blog" component={Blog} /> */}
          {/* <Route path="/contact" component={Contact} /> */}
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          {/* <Route path="/services" component={Services} /> */}
          <Route path="/styleguide" component={StyleguidePage} />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()