import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading } from "@chakra-ui/react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { chakra, VStack } from "@chakra-ui/react"

const ChakraImage = chakra(GatsbyImage)

const BlogPostFactory = ({data}) => {
  const post = data.mdx
  const image = getImage(post.frontmatter.hero_image)
  return(
    <>
        <ChakraImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
          maxH="350px"
          borderRadius="0.5rem"
          boxShadow='2xl'
       />
      <Heading as="h1" my={4}>{post.frontmatter.title}</Heading>
      <VStack spacing={4} my={4}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </VStack>
    </>
  )
}

export const query = graphql`
query BlogPostById($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData(formats: [AUTO, WEBP], placeholder: BLURRED)
        }
      }
    }
    body
  }
}
`

export default BlogPostFactory