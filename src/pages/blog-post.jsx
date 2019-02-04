import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'

const BlogPostPage = () => (
  <Layout pageTitle="Blog post">
    <h1>Hi from the blog post</h1>

    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPostPage
