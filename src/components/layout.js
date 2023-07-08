import { Container, Text, Grid } from "@chakra-ui/react"
import React from "react";
import Nav from './nav'

const Layout = ({children}) => {
  return(
          <Grid as="article" minHeight="100%" w="100%" gridTemplateColumns="100%" gridTemplateRows="auto 1fr auto">
         
             <Nav ml="auto" mr="auto"/>

            <Container as="main" w="100%" h="100%" minWidth={["0", "0","0", "724px"]}>
                  {children}
            </Container>


            <Text as="footer" textAlign="center" fontSize="sm" my={4}>
                  All rights reserved © Antal Tettinger 2022
            </Text>
          </Grid>
  )
}

export default Layout