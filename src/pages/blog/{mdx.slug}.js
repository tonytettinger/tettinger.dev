import React, {useRef} from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Heading, Flex } from "@chakra-ui/react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { chakra, VStack, Icon, Box } from "@chakra-ui/react"
import { FaHeart } from 'react-icons/fa'

const ChakraImage = chakra(GatsbyImage)

const BlogPostFactory = ({data}) => {
  const [likes, setLikes] = React.useState('')
  const updatedLike = useRef(false)
  const post = data.mdx
  const postId = post.frontmatter.post_id
  React.useEffect(() => {
    async function getLikes () {
      await loadLikes(postId)
    }

    getLikes()
  },[postId])

  async function loadLikes(postId) {
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

  const handleUpdate = async (postId) => {
    if(updatedLike.current) return
    updatedLike.current = true
    const postIdNum = parseInt(postId)
    await fetch('/.netlify/functions/add-like', {
      method: 'POST',
      body: JSON.stringify({
        postIdNum 
      }),
    })
    .then((r)=>r.json())
    .then((data)=> {
      setLikes(data.update_likes_by_pk.count)
    }).catch(err => console.log(err));
    
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
        <Flex align="center" _hover={{cursor: "pointer"}}><Icon onClick={() => handleUpdate(postId)} as={FaHeart} sx={{transition: 'all .25s ease-in'}} color={ updatedLike.current ? 'red.200' : 'red.500'} mr={4} /><Box minWidth="75px">{(likes || likes === 0) ? likes: "Loading likes..."}</Box></Flex>

      </VStack>
    </>
  )
}

export const query = graphql`
query BlogPostById($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      post_id
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