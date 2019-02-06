import React from 'react'
import Helmet from 'react-helmet'

import { Footer } from './footer'
import { Header } from './header'

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
}

export const Layout = ({ children, pageTitle, hasFooter } : {[key:string]:any}) => (
  <>
    <Helmet>
      <title>{pageTitle} | Material Template 3.0</title>
    </Helmet>

    <div className={`wrapper page page-${pageTitle.toLowerCase()}`}>
      <Header />

      {children}

      {hasFooter && <Footer />}
    </div>
  </>
)
export default Layout
