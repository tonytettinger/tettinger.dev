import React from 'react'

import { graphql } from 'gatsby'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Box, Heading } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

// Define the type for the data prop
interface ArticleTemplateProps {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
                stack_list?: string
                hero_image?: ImageDataLike
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

    return (
        <Box>
            <Heading as="h2" fontSize="xl" my={4} mr="auto">
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

                <Box className="mdx-content">
                    <MDXRenderer>{body}</MDXRenderer>
                </Box>
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
                stack_list
                hero_image {
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
