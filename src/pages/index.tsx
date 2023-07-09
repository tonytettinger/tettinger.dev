import '@fontsource/zilla-slab'
import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import {
    Box,
    Flex,
    Heading,
    Icon,
    LinkBox,
    LinkOverlay,
    List,
    ListIcon,
    ListItem,
    Text,
    VStack,
} from '@chakra-ui/react'

import { FaChevronRight, FaCode } from 'react-icons/fa'

import Wave from '../components/motion/Wave'
import { iconsOverImage } from './constants'

interface Post {
    slug: string
    frontmatter: {
        title: string
        date: string
    }
}

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(sort: { fields: [frontmatter___title], order: DESC }) {
                nodes {
                    frontmatter {
                        title
                        date
                    }
                    slug
                }
            }
        }
    `)

    const posts: Post[] = data.allMdx.nodes
    return (
        <>
            <Box style={{ position: 'relative' }}>
                <StaticImage
                    alt="Tony by the ocean"
                    src="../images/tony_tettinger.jpeg"
                    style={{
                        width: '100%',
                        maxHeight: '320px',
                        borderRadius: '0.5rem',
                        objectFit: 'contain',
                    }}
                />
                <Box
                    style={{
                        position: 'absolute',
                        right: '8%',
                        top: '40%',
                        backgroundColor: 'transparent',
                        display: 'flex',
                    }}
                >
                    {iconsOverImage.map(({ icon: IconComponent }, index) => (
                        <Wave delay={0.3 * index} key={index}>
                            <Icon as={IconComponent} w={14} h={14} color="gray.900" />
                        </Wave>
                    ))}
                </Box>
            </Box>
            <VStack spacing={4} my={4}>
                <Text>
                    Hello there! 😄 I'm Tony Tettinger a Frontend Software Engineer (aka "I'm just a
                    cook") who loves to create great user experiences and appreciates simple and
                    maintainable solutions. I love to learn about better practices, new technologies
                    and their applications.
                </Text>
                <Icon as={FaCode} />
                <Heading
                    as="h2"
                    fontWeight="800"
                    fontSize="xl"
                    css={{ textAlign: 'center' }}
                    my={6}
                >
                    Blog Posts
                </Heading>
                <List>
                    {posts.map((post) => {
                        return (
                            <LinkBox key={post.slug} _hover={{ color: '#25BFEB' }}>
                                <LinkOverlay href={`/blog/${post.slug}`}>
                                    <Flex as={ListItem} align="center">
                                        <ListIcon as={FaChevronRight} />
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

export default IndexPage
