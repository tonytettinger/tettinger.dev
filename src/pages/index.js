import * as React from "react"
import { graphql } from "gatsby";
import { Text, Icon, Heading, ListIcon, LinkOverlay, LinkBox, List, ListItem, Flex, chakra, Container, VStack } from "@chakra-ui/react";
import { GiBookmarklet, GiIvoryTusks } from 'react-icons/gi'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return(
    <>
      <StaticImage
        alt="Tony by the ocean"
        src="../images/tony_tettinger.jpeg"
        style={{
          width: "100%",
          maxHeight: "320px",
          borderRadius: "0.5rem",
          objectFit: "contain"  
        }}
      />
      <VStack spacing={4} my={4}>
      <Text>Hello! I'm Tony Tettinger a Full Stack Web Developer</Text>
      <Icon as={GiIvoryTusks}/>
      <Heading as='h2' fontWeight="800" fontSize="xl" css={{textAlign: "center"}} my={6}>Blog Posts</Heading>
      <Icon as={GiIvoryTusks}/>
      <List>
      {posts.map((post) => {
        return (
          <LinkBox key={post.slug} _hover={{color: "#25BFEB"}}>
            <LinkOverlay href={`/blog/${post.slug}`} >
                <Flex as={ListItem} align="center">
                  <ListIcon as={GiBookmarklet} />
                  {post.frontmatter.title} {post.frontmatter.date}
                 </Flex>
            </LinkOverlay>
          </LinkBox>
        )
      })}
      </List>
      </VStack>
      </>
  )
}

export const pageQuery = graphql`
{
  allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
    nodes {
      frontmatter {
        title
        date
      }
      slug
    }
  }
}

`

export default IndexPage;