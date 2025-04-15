import '@fontsource/zilla-slab/400.css'
import '@fontsource/zilla-slab/700.css'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'

import Layout from './src/components/Layout'
import { PostsProvider } from './src/providers/postProvider'

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
    return (
        <MDXProvider>
            <PostsProvider>{element}</PostsProvider>
        </MDXProvider>
    )
}
