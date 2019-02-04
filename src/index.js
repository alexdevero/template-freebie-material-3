import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import * as serviceWorker from './serviceWorker'

// Import components

// Import pages
import NotFoundPage from './pages/404'
import AboutPage from './pages/about'
import BlogPostPage from './pages/blog-post'
import BlogPage from './pages/blog'
import ContactPage from './pages/contact'
import LoginPage from './pages/login'
import IndexPage from './pages/index'
import PortfolioPage from './pages/portfolio'
import ServicesPage from './pages/services'
import StyleguidePage from './pages/styleguide'

// Import Presentation Panel for
import { PresentationPanel } from './components/presentation-panel'

// Import main Sass stylesheet
import './styles/styles.scss'

class App extends React.Component {
  state = {
    activeThemeColor: 'blue',
    isPresentationPanelVisible: false,
  }

  handleThemeColorChange = (event) => {
    if (event.target.title !== 'light') {
      this.setState({
        activeThemeColor: `${event.target.title}`
      })
    } else {
      this.setState({
        activeThemeColor: `blue`
      })
    }
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
          <Helmet>
            <html className={`color-${this.state.activeThemeColor}`} />
          </Helmet>

          <PresentationPanel state={this.state} colorClickHandler={this.handleThemeColorChange} panelToggleHandler={this.handlePresentationPanelToggle} />

          <Route path="/" component={IndexPage} exact={true} />

          <Route path="/404" component={NotFoundPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/blog-post" component={BlogPostPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/services" component={ServicesPage} />
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
