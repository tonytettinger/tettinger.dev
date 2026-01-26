import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { Box, Icon, Text, VStack } from '@chakra-ui/react'

import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di'

import { PostList } from '../components/PostList'
import Wave from '../components/motion/Wave'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const iconsOverImage = [
    { icon: DiHtml5 },
    { icon: DiJavascript1 },
    { icon: DiReact },
    { icon: DiCss3 },
]

const IndexPage = () => {
    const posts: Node[] = usePosts('projects')
    const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)

    return (
        <>
            <Box style={{ position: 'relative' }}>
                <StaticImage
                    alt="Tony by the ocean"
                    src="../../static/images/tony_tettinger.jpeg"
                    placeholder="blurred"
                    quality={100}
                    loading="eager"
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
            <VStack spacing={4} my={6} align="start" maxW="720px">
                <Text fontSize="2xl" fontWeight="bold">
                    Antal “Tony” Tettinger
                </Text>

                <Text fontSize="md" fontWeight="medium">
                    Senior Product Engineer · Berlin
                </Text>

                <Text fontSize="lg">
                    I architect and build user-centric web experiences that balance craft,
                    performance, and business impact. My work emphasizes quality, maintainable
                    systems, and long-term value.
                </Text>
            </VStack>
        </>
    )
}
export default IndexPage
