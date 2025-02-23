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

import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di'
import { FaChevronRight, FaCode } from 'react-icons/fa'

import Wave from '../components/motion/Wave'

const iconsOverImage = [
    { icon: DiHtml5 },
    { icon: DiJavascript1 },
    { icon: DiReact },
    { icon: DiCss3 },
]

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
                        <Wave key={index} delay={0.3 * index}>
                            <Icon
                                as={IconComponent}
                                w={{ base: 10, md: 14 }}
                                h={{ base: 10, md: 14 }}
                                color="gray.900"
                            />
                        </Wave>
                    ))}
                </Box>
            </Box>
            <VStack spacing={4} my={4}>
                <Text>
                    Hello there! 😄 I’m **Tony Tettinger**, a Berlin-based **Full Stack Software
                    Engineer** with a product-minded approach to building exceptional user
                    experiences and scalable, maintainable solutions. I’m passionate about
                    leveraging technology to solve real-world problems and thrive in environments
                    that challenge me to grow and innovate. When I’m not coding, you’ll find me
                    reading books, travelling, playing board games, computer games, squid games or
                    stepping out of my comfort zone trying out new things such as improv comedy.
                    Let’s connect and create something amazing together! 🚀
                </Text>
                <Icon as={FaCode} />
                <Heading
                    as="h2"
                    fontWeight="800"
                    fontSize="xl"
                    css={{ textAlign: 'center' }}
                    my={6}
                >
                    Entries
                </Heading>
                <List>
                    {posts.map((post) => {
                        return (
                            <LinkBox as={ListItem} key={post.slug} _hover={{ color: '#25BFEB' }}>
                                <LinkOverlay href={`/blog/${post.slug}`}>
                                    <Flex align="center">
                                        <ListIcon as={FaChevronRight} />
                                        {post.frontmatter.title}
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
