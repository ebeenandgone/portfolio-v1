import React from "react"
import PropTypes from "prop-types"
import { Head } from "../pages"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Head />
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
