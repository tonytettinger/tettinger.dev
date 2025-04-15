import React, { ReactNode, useEffect, useState } from 'react'

import { Box, Container, Grid, Text } from '@chakra-ui/react'

import '../../static/fonts/fonts.css'
import Nav from './Nav'
import Seo from './Seo'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    useEffect(() => {
        // Check if the browser supports the Font Loading API
        if ('fonts' in document) {
            // Load Zilla Slab fonts
            Promise.all([
                document.fonts.load('400 1em Zilla Slab'),
                document.fonts.load('700 1em Zilla Slab'),
            ]).then(() => {
                setFontsLoaded(true)
            })
        } else {
            // Fallback for browsers that don't support the Font Loading API
            setTimeout(() => setFontsLoaded(true), 1000)
        }
    }, [])

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
            <Box
                visibility={fontsLoaded ? 'visible' : 'hidden'}
                opacity={fontsLoaded ? 1 : 0}
                transition="opacity 0.1s ease-in"
            >
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
            </Box>
        </>
    )
}

export default Layout
