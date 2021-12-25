import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({title,description, meta=[]}) => {
  const {site} = useStaticQuery(
    graphql`
    {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  
  return <Helmet 
          title={title}
          htmlAttributes={{lang: `en`}}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription
            },
            {
              property: `og:title`,
              content: title
            },
            {
              property: `og:description`,
              content: metaDescription
            },
            {
              property: `og:type`,
              content: `website`
            }
          ].concat(meta)}
          >

  </Helmet>
}

export default Seo