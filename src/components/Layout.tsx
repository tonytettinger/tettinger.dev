import React, { ReactNode } from 'react'

import { Container, Grid, Text } from '@chakra-ui/react'

import '../../static/fonts/fonts.css'
import Nav from './Nav'
import Seo from './Seo'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Seo />
            <style>
                {`
                    /* Critical font-display CSS to prevent FOUC */
                    @font-face {
                        font-family: 'Zilla Slab';
                        src: url('/static/zilla-slab-400-normal.woff2') format('woff2');
                        font-weight: 400;
                        font-display: block;
                    }
                    @font-face {
                        font-family: 'Zilla Slab';
                        src: url('/static/zilla-slab-700-normal.woff2') format('woff2');
                        font-weight: 700;
                        font-display: block;
                    }
                `}
            </style>
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
