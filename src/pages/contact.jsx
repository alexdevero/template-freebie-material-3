import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'

const Contact = () => (
  <Layout pageTitle="Contact">
    <h1>Hi from the Contact</h1>

    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
