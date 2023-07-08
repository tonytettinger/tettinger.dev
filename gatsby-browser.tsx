import '@fontsource/manrope'
//import fonts
import '@fontsource/rammetto-one'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'

import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
    return <MDXProvider>{element}</MDXProvider>
}
