import React, { ReactNode } from 'react'

import { Link as GatsbyLink } from 'gatsby'

import { Container, Grid, Link, Text, VStack } from '@chakra-ui/react'

import AnalyticsConsent from './AnalyticsConsent'
import Nav from './Nav'

interface LayoutProps {
    children: ReactNode
    location: { pathname: string }
}

const Layout = ({ children, location }: LayoutProps) => {
    return (
        <>
            <Grid
                as="article"
                minHeight="100%"
                w="100%"
                gridTemplateColumns="100%"
                gridTemplateRows="auto 1fr auto"
            >
                <Nav ml="auto" mr="auto" />

                <Container as="main" w="100%" h="100%" minWidth={['0', '0', '0', '1024px']}>
                    {children}
                </Container>

                <VStack as="footer" textAlign="center" fontSize="sm" my={4} spacing={2} px={4}>
                    <Text>Antal Tettinger. All rights reserved.</Text>
                    <Link as={GatsbyLink} to="/privacy/">
                        Privacy notice
                    </Link>
                    <AnalyticsConsent pathname={location.pathname} />
                </VStack>
            </Grid>
        </>
    )
}

export default Layout
