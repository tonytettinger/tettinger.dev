import * as React from "react"
import "../components/layout"
import Layout from "../components/layout";
import Seo from "../components/seo"
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Heading, VStack } from "@chakra-ui/react";

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return(
    <Layout>
    <VStack w="full" h="full" p={10} spacing={10} alignItems="center">
      <Seo title={`Homepage`}/>
      <Heading as='h1' size='4xl' css={{textAlign: "center"}}>Content</Heading>
      {posts.map((post) => {
        return (
            <Link to={post.slug} key={post.slug}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
        )
      })}
      </VStack>
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMdx(sort: {fields: [frontmatter___title], order: ASC}) {
    nodes {
      frontmatter {
        title
      }
      slug
    }
  }
}

`

export default IndexPage;