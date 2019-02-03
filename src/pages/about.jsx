import React from 'react'

import { GridRow } from '../components/grid-row'
import { GridColumn } from '../components/grid-column'
import { IconAwesome } from '../components/_free/icon-awesome'
import { Jumbotron } from '../components/jumbotron'
import { Layout } from '../components/layout'
import { List } from '../components/list'
import { Section } from '../components/section'

class About extends React.Component {
  render () {
    return (
      <Layout pageTitle="About">
        <Jumbotron type="small" className="d-flex justify-content-center align-items-center">
          <GridRow className="d-flex justify-content-center align-items-center text-center">
            <GridColumn sm={10} md={9} lg={7} xl={6}>
              <h1 className="h2 mb-4">A simple about us page</h1>

              <p className="mb-0">Every page needs a small description after the big bold title, that's why we added this text here. Add here the information that can make you or your product create the best first impression.</p>
            </GridColumn>
          </GridRow>
        </Jumbotron>

        <Section container="default" className="pt-5 pb-6">
          <h1 className="h3 mb-4 text-center">Here is our team</h1>

          <GridRow>
            <GridColumn md={6} lg={4} className="text-lg-center">
              <img src="" alt=""/>

              <h2 className="h5 mb-3 mt-4">Anna Boden</h2>

              <h3 className="text-16 mb-3 font-weight-normal text-gray">Designer</h3>

              <p>Every page needs a small description after the big bold title, that's why we added this text here. Add here the information that can make you or your product create the best first impression.</p>

              <List type="inline" className="text-center mt-3 mb-0">
                <li className="list-inline-item">
                  <a href="#!" className="btn">
                    <IconAwesome name="pinterest" type="brand" />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="#!" className="btn">
                    <IconAwesome name="twitter" type="brand" />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a href="#!" className="btn">
                    <IconAwesome name="dribbble" type="brand" />
                  </a>
                </li>
              </List>
            </GridColumn>

            <GridColumn md={6} lg={4} className="mt-5 mt-md-0 text-lg-center">
              <img src="" alt=""/>

              <h2 className="h5 mb-3 mt-4">Tony Stark</h2>

              <h3 className="text-16 mb-3 font-weight-normal text-gray">Developer</h3>

              <p>Every page needs a small description after the big bold title, that's why we added this text here. Add here the information that can make you or your product create the best first impression.</p>

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
                    <IconAwesome name="codepen" type="brand" />
                  </a>
                </li>
              </List>
            </GridColumn>

            <GridColumn md={6} lg={4} className="mt-5 mt-lg-0 text-lg-center">
              <img src="" alt=""/>

              <h2 className="h5 mb-3 mt-4">Nick Fury</h2>

              <h3 className="text-16 mb-3 font-weight-normal text-gray">Tester</h3>

              <p>Every page needs a small description after the big bold title, that's why we added this text here. Add here the information that can make you or your product create the best first impression.</p>

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
                    <IconAwesome name="reddit" type="brand" />
                  </a>
                </li>
              </List>
            </GridColumn>
          </GridRow>
        </Section>
      </Layout>
    )
  }
}

export default About
