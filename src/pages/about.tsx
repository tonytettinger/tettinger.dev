import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { Heading, Text, VStack } from '@chakra-ui/react'

import { PostList } from '../components/PostList'

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { frontmatter: { category: { eq: "thoughts" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            hero_image_alt
                            hero_image_credit_link
                            hero_image_credit_text
                            hero_image {
                                childImageSharp {
                                    gatsbyImageData(formats: [AUTO, WEBP])
                                }
                            }
                            stack_list
                            order
                        }
                        body
                    }
                }
            }
        }
    `)
    const posts: QueryData[] = data.allMdx.edges

    return (
        <VStack>
            <Heading as="h1">About me</Heading>
            <Text>
                As a developer I'm striving for simplicity, maintainable code and providing robust
                solutions. I have developed applications and solved issues that require a
                comprehensive knowledge of web technologies. I'm a believer of continuous
                self-improvement and the principles of YAGNI, KISS. No over-engineering, no
                over-abstraction, listen to others, take criticism and improve continuously.
            </Text>
            <PostList posts={posts} title="Thoughts" />
        </VStack>
    )
}

export default AboutPage
