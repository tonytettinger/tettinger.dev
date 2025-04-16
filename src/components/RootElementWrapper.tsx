import { MDXProvider } from '@mdx-js/react'
import React, { ReactNode } from 'react'

import { PostsProvider } from '../providers/postProvider'

type RootElementWrapperProps = {
    children: ReactNode
}

export const RootElementWrapper = ({ children }: RootElementWrapperProps) => {
    return (
        <MDXProvider>
            <PostsProvider>{children}</PostsProvider>
        </MDXProvider>
    )
}
