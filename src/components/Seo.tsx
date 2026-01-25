import React from 'react'
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

const Seo = () => {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                    siteUrl
                    title
                }
            }
        }
    `)

    const { title, description } = site.siteMetadata

    return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
        </Helmet>
    )
}

export default Seo
