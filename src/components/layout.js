import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

/**
 * Layout template for site, contains the site header and page content (as children)
 * Takes language prop to pass into header component
 * CSS file sets font family for h1-4 and body
 */

const Layout = ({ children, language }) => (
  <>
    <Header siteTitle="docubyte" language={language} />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
}

Layout.defaultProps = {
  language: 'en',
};

export default Layout
