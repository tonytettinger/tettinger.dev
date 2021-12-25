/** @jsx jsx */
import { jsx } from "theme-ui"
import {Link} from "gatsby"
import { Container } from "@chakra-ui/react"
const Layout = ({children}) => {
  return(
      <Container maxW='container.md' centerContent>
          <header>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer>Footer is here</footer>
      </Container>
  )
}

export default Layout