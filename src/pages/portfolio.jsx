import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'

const PortfolioPage = () => (
  <Layout pageTitle="Portfolio">
    <h1>Hi from the Portfolio</h1>

    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
