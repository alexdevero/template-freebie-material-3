import React from 'react'

import { GridRow } from '../components/grid-row'
import { GridColumn } from '../components/grid-column'
import { IconAwesome } from '../components/_free/icon-awesome'
import { Jumbotron } from '../components/jumbotron'
import Layout from '../components/layout'
import { List } from '../components/list'

class LoginPage extends React.Component {
  state = {
    isFormMessageVisible: false,
    isLoginMode: true
  }

  generateFormContent = () => {
    if (this.state.isLoginMode) {
      return (
        <form className="pb-1">
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-0">
                <IconAwesome name="user-circle" type="solid" />
              </div>
            </div>

            <input type="text" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="loginUsername" placeholder="Username" />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-0">
                <IconAwesome name="key" type="solid" />
              </div>
            </div>

            <input type="password" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="loginPassword" placeholder="Password" />
          </div>

          {this.state.isFormMessageVisible && <p className="alert-info rounded mt-5 pt-3 pb-3" role="alert">You know this is not for real, right <span aria-label="Winking Face" role="img">😉</span>?</p>}

          <div className="mt-5">
            <button type="button" className="btn btn-primary w-100" onClick={this.handleFormSubmit}>Login</button>
          </div>
        </form>
      )
    } else {
      return (
        <form className="pb-1">
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-0">
                <IconAwesome name="user-circle" type="solid" />
              </div>
            </div>

            <input type="text" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="registerUsername" placeholder="Username" />
          </div>

          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-0">
                <IconAwesome name="at" type="solid" />
              </div>
            </div>

            <input type="email" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="registerEmail" placeholder="Email" />
          </div>

          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-white border-0">
                <IconAwesome name="key" type="solid" />
              </div>
            </div>

            <input type="password" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="registerPassword" placeholder="Password" />
          </div>

          {this.state.isFormMessageVisible && <p className="alert-info rounded mt-5 pt-3 pb-3" role="alert">You know this is not for real, right <span aria-label="Winking Face" role="img">😉</span>?</p>}

          <div className="mt-5">
            <button type="button" className="btn btn-primary w-100" onClick={this.handleFormSubmit}>Register</button>
          </div>
        </form>
      )
    }
  }

  renderFormLink = () => {
    if (this.state.isLoginMode) {
      return <p className="mt-4 text-14"><em className="text-gray">Don't have an account? <a href="#!" onClick={this.handleModeChange}>Register</a>.</em></p>
    } else {
      return <p className="mt-4 text-14"><em className="text-gray">Already have an account? <a href="#!" onClick={this.handleModeChange}>Log in</a>.</em></p>
    }
  }

  handleFormSubmit = () => {
    this.setState({
      isFormMessageVisible: !this.state.isFormMessageVisible
    })
  }

  handleModeChange = () => {
    this.setState({
      isFormMessageVisible: false,
      isLoginMode: !this.state.isLoginMode
    })
  }

  render () {
    return (
      <Layout pageTitle="Login">
        <Jumbotron className="d-flex justify-content-center align-items-center text-center" type="large" isFluid={true}>
          <GridRow className="justify-content-center">
            <GridColumn sm={8} md={6} lg={5}>
              <div className="card border-0">
                <div className="card-header bg-primary p-3">
                  <h2 className="h5 card-title font-weight-normal mb-0 text-center text-white">{this.state.isLoginMode ? 'Login' : 'Register'}</h2>
                </div>

                <div className="card-body pt-4">
                  {this.generateFormContent()}

                  <p className="mt-4 text-gray">or use</p>

                  <List type="inline" className="text-center mt-3 mb-0">
                    <li className="list-inline-item">
                      <a href="#!" className="btn">
                        <IconAwesome name="github" type="brand" />
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#!" className="btn">
                        <IconAwesome name="twitter" type="brand" />
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="#!" className="btn">
                        <IconAwesome name="facebook" type="brand" />
                      </a>
                    </li>
                  </List>

                  {this.renderFormLink()}
                </div>
              </div>
            </GridColumn>
          </GridRow>
        </Jumbotron>
      </Layout>
    )
  }
}

export default LoginPage
