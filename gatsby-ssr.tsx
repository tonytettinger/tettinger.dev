import React from 'react'

import { WrapPageElementBrowserArgs } from 'gatsby'

import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => {
    return <Layout {...props}>{element}</Layout>
}
