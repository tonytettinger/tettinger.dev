import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import { QueryData } from '../types'

interface PostListProps {
    posts: QueryData[]
    title: string
}

export const PostList = ({ posts, title }: PostListProps) => {
    const ChakraImage = chakra(GatsbyImage)

    return (
        <>
            <Heading as="h1" my={4}>
                {title}
            </Heading>
            {posts.map((post) => {
                const image = getImage(post.node.frontmatter.hero_image)

                return (
                    <VStack spacing={4}>
                        <Heading as="h2" fontSize="xl" my={4} mr="auto">
                            {post.node.frontmatter.title}
                        </Heading>
                        {image ? (
                            <ChakraImage
                                image={image}
                                alt={post.node.frontmatter.hero_image_alt}
                                maxH="120px"
                                borderRadius="0.5rem"
                                boxShadow="2xl"
                            />
                        ) : null}
                        {post.node.frontmatter.stack_list && (
                            <Text>
                                Tech stack: <b>{post.node.frontmatter.stack_list}</b>
                            </Text>
                        )}
                        <MDXRenderer textAlign="left">{post.node.body}</MDXRenderer>
                        <Divider />
                    </VStack>
                )
            })}
        </>
    )
}
