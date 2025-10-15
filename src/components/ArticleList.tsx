import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import { type Node } from '../types'

interface PostListProps {
    posts: Node[]
    title: string
}

export const ArticleList = ({ posts, title }: PostListProps) => {
    const ChakraImage = chakra(GatsbyImage)

    return (
        <>
            <Heading as="h1" my={4}>
                {title}
            </Heading>
            {posts.map((post) => {
                const image = getImage(post.frontmatter.hero_image)

                return (
                    <VStack key={post.id} spacing={4} mb="2">
                        <Link href={`/articles/${post.frontmatter.slug}`} mr="auto">
                            <Flex gap="2" mr="auto">
                                {image ? (
                                    <ChakraImage
                                        image={image}
                                        alt={post.frontmatter.hero_image_alt}
                                        maxH="auto"
                                        maxW="200px"
                                        borderRadius="0.5rem"
                                        boxShadow="2xl"
                                    />
                                ) : null}
                                <Flex wrap="wrap" align="flex-start" direction="column">
                                    <Box>
                                        <Heading as="h2" fontSize="md" w="full">
                                            {post.frontmatter.title}
                                        </Heading>
                                        {post.frontmatter.tags && (
                                            <Text fontSize="sm" w="full" fontStyle="italic" mb="2">
                                                {post.frontmatter.tags}
                                            </Text>
                                        )}
                                    </Box>
                                    {post.frontmatter.summary && (
                                        <Text fontSize="md">{post.frontmatter.summary}</Text>
                                    )}
                                </Flex>
                            </Flex>
                        </Link>
                    </VStack>
                )
            })}
        </>
    )
}
