import React from 'react'
import { Link } from 'react-router-dom'

import { GridRow } from '../components/grid-row'
import { GridColumn } from '../components/grid-column'
import { Layout } from '../components/layout'
import { Section } from '../components/section'

const NotFoundPage = () => (
  <Layout pageTitle="404">
    <Section container="default" className="d-flex align-items-center">
      <GridRow className="justify-content-center text-center">
        <GridColumn sm={10} md={8} lg={6}>
          <h1 className="h1">&#123; 404 &#125;</h1>

          <h2 className="h2 mt-4 mb-4">... Not found ...</h2>

          <p className="mb-4">You just hit a route that doesn&#39;t exist... the sadness.</p>

          <Link to="/">Back home</Link>
        </GridColumn>
      </GridRow>
    </Section>
  </Layout>
)

export default NotFoundPage
