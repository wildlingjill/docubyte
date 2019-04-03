/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

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
