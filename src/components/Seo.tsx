import React from 'react'
import { Helmet } from 'react-helmet'

import { graphql, useStaticQuery } from 'gatsby'

interface SeoProps {
    title?: string
    description?: string
    pathname?: string
    image?: string
    imageAlt?: string
    type?: 'website' | 'article'
    noindex?: boolean
}

const Seo = ({
    title,
    description,
    pathname = '/',
    image = '/images/tony_tettinger.jpeg',
    imageAlt = 'Antal Tettinger by the ocean',
    type = 'website',
    noindex = false,
}: SeoProps) => {
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

    const { siteUrl, title: defaultTitle, description: defaultDescription } = site.siteMetadata
    const pageTitle = title ? `${title} · Antal Tettinger` : defaultTitle
    const pageDescription = description || defaultDescription
    const canonicalUrl = new URL(pathname, siteUrl).href
    const imageUrl = new URL(image, siteUrl).href

    return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
            {!noindex && <link rel="canonical" href={canonicalUrl} />}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content={imageAlt} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={imageAlt} />
        </Helmet>
    )
}

export default Seo
