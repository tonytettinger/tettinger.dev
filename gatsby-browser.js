import '@fontsource/manrope'
//import fonts
import '@fontsource/rammetto-one'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

const components = {
    pre: (props) => {
        const className = props.children.props.className || ''
        const matches = className.match(/language-(?<lang>.*)/)
        const addStyle = {
            borderRadius: '0.5rem',
            padding: '1rem',
            maxWidth: '100%',
            overflowX: 'auto',
        }
        return (
            <Highlight
                {...defaultProps}
                code={props.children.props.children.trim()}
                language={
                    matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''
                }
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, ...addStyle }}>
                        {JSON.stringify(style)}
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        )
    },
    code: (props) => <pre style={{ color: 'green' }} {...props} />,
    wrapper: ({ children }) => <>{children}</>,
}
export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}
