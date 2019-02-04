import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'

const ServicesPage = () => (
  <Layout pageTitle="Services">
    <h1>Hi from the Services</h1>

    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
