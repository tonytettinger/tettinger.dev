import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'

import Layout from './src/components/Layout'
import { PostsProvider } from './src/providers/postProvider'
import './static/fonts/fonts.css'

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
