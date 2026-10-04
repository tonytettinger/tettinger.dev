import React from 'react'

import { graphql } from 'gatsby'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Box, Heading } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import Seo from './Seo'

// Define the type for the data prop
interface ArticleTemplateProps {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
                slug: string
                summary?: string
                stack_list?: string
                hero_image?: ImageDataLike & { publicURL?: string }
                hero_image_alt?: string
            }
            body: string
        }
    }
    pageContext: {
        id: string
    }
}

const ArticleTemplate = ({ data }: ArticleTemplateProps) => {
    const { mdx } = data
    const { frontmatter, body } = mdx
    const image = frontmatter.hero_image ? getImage(frontmatter.hero_image) : null
    const ChakraImage = chakra(GatsbyImage)

    const MdxContent = chakra(Box, {
        baseStyle: {
            mt: 4,
            lineHeight: 1.7,
            h1: {
                fontSize: '2xl',
                fontWeight: 'bold',
                mt: 8,
                mb: 4,
            },
            h2: {
                fontSize: 'xl',
                fontWeight: 'bold',
                mt: 8,
                mb: 3,
            },
            h3: {
                fontSize: 'lg',
                fontWeight: 'semibold',
                mt: 6,
                mb: 2,
            },
            p: {
                mt: 4,
            },
            ul: {
                mt: 4,
                pl: 6,
            },
            li: {
                mt: 1,
            },
        },
    })

    return (
        <Box>
            <Seo
                title={frontmatter.title}
                description={frontmatter.summary}
                pathname={`/articles/${frontmatter.slug}/`}
                image={frontmatter.hero_image?.publicURL}
                imageAlt={frontmatter.hero_image_alt}
                type="article"
            />
            <Heading as="h1" fontSize="xl" my={4} mr="auto">
                {frontmatter.title}
            </Heading>

            <Box position="relative">
                {image && (
                    <Box float="left" mr={6} mb={4} maxW={['100%', '40%', '30%']} width="auto">
                        <ChakraImage
                            image={image}
                            alt={frontmatter.hero_image_alt || 'Default alt text'}
                            borderRadius="0.5rem"
                            boxShadow="2xl"
                        />
                    </Box>
                )}

                <MdxContent className="mdx-content">
                    <MDXRenderer>{body}</MDXRenderer>
                </MdxContent>
            </Box>
        </Box>
    )
}

export default ArticleTemplate

// This GraphQL query fetches the MDX content using the ID from context
export const query = graphql`
    query ($id: String!) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date
                slug
                summary
                stack_list
                hero_image {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(width: 800)
                    }
                }
                hero_image_alt
            }
            body
        }
    }
`
