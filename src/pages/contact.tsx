import React from 'react'

import { GridRow } from '../components/grid-row'
import { GridColumn } from '../components/grid-column'
import { Jumbotron } from '../components/jumbotron'
import { Layout } from '../components/layout'
import { Section } from '../components/section'

type ContactPageProps = {
  handleFormSubmit: Function;
}

class ContactPage extends React.Component<ContactPageProps, {}> {
  state = {
    isFormMessageVisible: false
  }

  handleFormSubmit = () => {
    this.setState({
      isFormMessageVisible: !this.state.isFormMessageVisible
    })
  }

  render () {
    return (
      <Layout pageTitle="Contact">
        <Jumbotron type="small" className="d-flex justify-content-center align-items-center">
          <GridRow className="d-flex justify-content-center align-items-center text-center">
            <GridColumn sm={10} md={9} lg={7} xl={6}>
              <h1 className="h2 mb-4">A simple contact us page</h1>

              <p className="mb-0">Every page needs a small description after the big bold title, that's why we added this text here. Add here the information that can make you or your product create the best first impression.</p>
            </GridColumn>
          </GridRow>
        </Jumbotron>

        <Section container="default" className="pt-5 pb-6">
          <h1 className="h3 mb-4 text-center">Work with us</h1>

          <GridRow className="d-flex justify-content-center align-items-center">
            <GridColumn sm={11} md={9} lg={8} xl={7}>
              <form className="pb-1">
                <GridRow>
                  <GridColumn sm={6}>
                    <div className="form-group">
                      <label className="text-14" htmlFor="contactName">Your name</label>

                      <input type="text" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="contactName" />
                    </div>
                  </GridColumn>

                  <GridColumn sm={6} className="mt-4 mt-md-0">
                    <div className="form-group">
                      <label className="text-14" htmlFor="contactEmail">Your email</label>

                      <input type="email" className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="contactEmail" />
                    </div>
                  </GridColumn>
                </GridRow>

                <div className="form-group mt-4">
                  <label className="text-14" htmlFor="contactMessage">Your message</label>

                  <textarea className="form-control border-top-0 border-left-0 border-right-0 rounded-0 text-14" id="contactMessage" rows={3}></textarea>
                </div>

                {this.state.isFormMessageVisible && <p className="alert-info rounded mt-5 pt-3 pb-3 text-center" role="alert">You know this is not for real, right <span aria-label="Winking Face" role="img">😉</span>?</p>}

                <div className="mt-5 text-center">
                  <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit}>Send message</button>
                </div>
              </form>
            </GridColumn>
          </GridRow>
        </Section>
      </Layout>
    )
  }
}

export default ContactPage
