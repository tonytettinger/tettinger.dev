import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import { type Node } from '../types'

interface PostListProps {
    posts: Node[]
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
                const image = getImage(post.frontmatter.hero_image)

                return (
                    <VStack key={post.id} spacing={4}>
                        <Heading as="h2" fontSize="xl" my={4} mr="auto">
                            {post.frontmatter.title}
                        </Heading>
                        {image ? (
                            <ChakraImage
                                image={image}
                                alt={post.frontmatter.hero_image_alt}
                                maxH="120px"
                                borderRadius="0.5rem"
                                boxShadow="2xl"
                            />
                        ) : null}
                        {post.frontmatter.stack_list && (
                            <Text>
                                Tech stack: <b>{post.frontmatter.stack_list}</b>
                            </Text>
                        )}
                        <MDXRenderer textAlign="left">{post.body}</MDXRenderer>
                        <Divider />
                    </VStack>
                )
            })}
        </>
    )
}
