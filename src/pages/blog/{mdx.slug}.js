import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading, Flex } from "@chakra-ui/react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { chakra, VStack, Icon, Box } from "@chakra-ui/react"
import { FaHeart } from 'react-icons/fa'


const ChakraImage = chakra(GatsbyImage)

const BlogPostFactory = ({data}) => {
  const [likes, setLikes] = React.useState(0)
  const [updatingLikes, setUpdatingLikes] = React.useState(false)
  const post = data.mdx
  const postId = post.id
  
  React.useEffect(() => {
    loadLikes()
  })

  async function loadLikes() {
    await fetch(
      '/.netlify/functions/load-like',{
        method: 'POST',
        body: JSON.stringify({
          postId,
        }),
      }
    ).then((res) => res.json())
     .then((data) => setLikes(data.likes.returning[0].count))
  }

  const handleUpdate = (postId) => {

    if(updatingLikes) return
    setUpdatingLikes(true)

    fetch('/.netlify/functions/add-like', {
      method: 'POST',
      body: JSON.stringify({
        postId,
      }),
    })
    .then((r)=>r.json())
    .then((data)=> {
      setUpdatingLikes(false)
      setLikes(data.updated.count)
    });
    
    }

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
        <Flex align="center" _hover={{cursor: "pointer"}}><Icon onClick={() => handleUpdate(postId)} as={FaHeart} sx={{transition: 'all .25s ease-in'}} color={ updatingLikes ? 'gray' : 'red.500'} mr={4} /><Box minWidth="75px">{likes ? likes : '' }</Box></Flex>
      </VStack>
    </>
  )
}

export const query = graphql`
query BlogPostById($id: String) {
  mdx(id: {eq: $id}) {
    id
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