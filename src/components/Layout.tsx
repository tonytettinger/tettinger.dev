import React, { ReactNode } from 'react'

import { Container, Grid, Text } from '@chakra-ui/react'

import Nav from './Nav'
import Seo from './Seo'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const year = new Date().getFullYear()
    return (
        <>
            <Seo />
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

                <Text as="footer" textAlign="center" fontSize="sm" my={4}>
                    Antal Tettinger. All rights reserved.
                </Text>
            </Grid>
        </>
    )
}

export default Layout
