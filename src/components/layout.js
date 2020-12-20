import React from "react"
import { Link } from "gatsby"

import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <nav>
        <ul>
          <li><Link className="global-nav-link" to="/about">ABOUT</Link></li>
          <li><Link className="global-nav-link" to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
      <hr />
      <footer>
        <Bio />
      </footer>
    </div>
  )
}

export default Layout
