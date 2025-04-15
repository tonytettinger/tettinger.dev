import React from 'react'

import { WrapPageElementBrowserArgs } from 'gatsby'

import Layout from './src/components/Layout'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/zilla-slab-400-normal.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="zilla400"
        />,
        <link
            rel="preload"
            href="/fonts/zilla-slab-700-normal.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="zilla700"
        />,
    ])
}

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => {
    return <Layout {...props}>{element}</Layout>
}
