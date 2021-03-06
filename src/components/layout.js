/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"

import "./layout.css"

const Layout = ({ children, contentClassName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main className={`flex-grow ${contentClassName}`}>{children}</main>
      <footer className="text-gray-800 p-3 bg-gray-200 text-center sm:text-left">
        <span>© Climatescape <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline hover:no-underline">CC BY-SA</a></span>
        <span> • </span>
        <a href="mailto:brendan@sinceresoftware.co" className="underline hover:no-underline">Contact</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contentClassName: PropTypes.string
}

export default Layout
