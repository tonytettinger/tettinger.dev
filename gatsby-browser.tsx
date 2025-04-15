import '@fontsource/zilla-slab/400.css'
import '@fontsource/zilla-slab/700.css'
import { MDXProvider } from '@mdx-js/react'
import * as React from 'react'

import Layout from './src/components/Layout'
import { PostsProvider } from './src/providers/postProvider'

type GatsbyOnPreRenderHTML = {
    getHeadComponents: () => React.ReactNode[]
    replaceHeadComponents: (components: React.ReactNode[]) => void
}

export const onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
}: GatsbyOnPreRenderHTML) => {
    const headComponents = getHeadComponents()

    // Preload font files
    const preloadFonts = [
        <link
            key="zilla-slab-400"
            rel="preload"
            href="/static/zilla-slab-latin-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="zilla-slab-700"
            rel="preload"
            href="/static/zilla-slab-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
    ]

    replaceHeadComponents([...preloadFonts, ...headComponents])
}

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
