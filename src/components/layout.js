import React from "react"
import {Link} from "gatsby"

const Layout = ({children}) => {
  return(
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer is here</footer>
    </>
  )
}

export default Layout