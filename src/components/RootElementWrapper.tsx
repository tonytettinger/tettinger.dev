import { MDXProvider } from '@mdx-js/react'
import React, { ReactNode } from 'react'

import { ChakraProvider, theme } from '@chakra-ui/react'

import { PostsProvider } from '../providers/postProvider'

type RootElementWrapperProps = {
    children: ReactNode
}

export const RootElementWrapper = ({ children }: RootElementWrapperProps) => {
    return (
        <ChakraProvider theme={theme}>
            <MDXProvider>
                <PostsProvider>{children}</PostsProvider>
            </MDXProvider>
        </ChakraProvider>
    )
}
