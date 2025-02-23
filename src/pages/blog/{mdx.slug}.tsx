import React from 'react'

import { graphql } from 'gatsby'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Heading, VStack, chakra } from '@chakra-ui/react'

const ChakraImage = chakra(GatsbyImage)

interface BlogPostFactoryProps {
    data: {
        mdx: {
            frontmatter: {
                post_id: string
                title: string
                hero_image_alt: string
                hero_image_credit_link: string
                hero_image_credit_text: string
                hero_image: ImageDataLike
            }
            body: string
        }
    }
}

const BlogPostFactory = ({ data }: BlogPostFactoryProps) => {
    const post = data.mdx

    const image = getImage(post.frontmatter.hero_image)
    return (
        <>
            {image ? (
                <ChakraImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                    maxH="350px"
                    borderRadius="0.5rem"
                    boxShadow="2xl"
                />
            ) : null}
            <Heading as="h1" my={4}>
                {post.frontmatter.title}
            </Heading>
            <VStack spacing={4} my={4}>
                <MDXRenderer>{post.body}</MDXRenderer>
            </VStack>
        </>
    )
}

export const query = graphql`
    query BlogPostById($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                post_id
                title
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData(formats: [AUTO, WEBP])
                    }
                }
            }
            body
        }
    }
`
export default BlogPostFactory
