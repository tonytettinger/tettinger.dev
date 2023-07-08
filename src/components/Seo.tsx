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

    return (
        <Helmet
            title={site.siteMetadata.title}
            htmlAttributes={{ lang: `en` }}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: site.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: site.siteMetadata.title,
                },
                {
                    property: `og:description`,
                    content: site.siteMetadata.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ]}
        ></Helmet>
    )
}

export default Seo
