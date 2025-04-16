import * as React from 'react'

import Layout from './src/components/Layout'
import { RootElementWrapper } from './src/components/RootElementWrapper'
import './static/fonts/fonts.css'

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => <RootElementWrapper>{element}</RootElementWrapper>
