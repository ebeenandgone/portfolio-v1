import React from "react"
import PropTypes from "prop-types"

import Helmet from "react-helmet"

import "./layout.css"

const Layout = ({ children }) => {


  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Jockey+One&display=swap" 
          rel="stylesheet"></link>
      </Helmet>
      <main>{children}</main>
      <footer class="footer">
        © {new Date().getFullYear()}, Built by <a href="/">ekeen</a> using
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
