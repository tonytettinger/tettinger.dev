import * as React from 'react'

import { Heading, Text, VStack } from '@chakra-ui/react'

import { PostList } from '../components/PostList'
import Seo from '../components/Seo'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const AboutPage = () => {
    const posts: Node[] = usePosts('thoughts')

    return (
        <VStack>
            <Seo
                title="About"
                pathname="/about/"
                description="About Antal Tettinger, a Berlin-based product engineer, and his approach to simple, maintainable software and collaborative delivery."
            />
            <Heading as="h1">About me</Heading>
            <Text>
                As a developer I'm striving for simplicity, maintainable code and providing robust
                solutions. I have developed applications and solved issues that require a
                comprehensive knowledge of web technologies.
            </Text>
            <PostList posts={posts} title="Thoughts" headingLevel="h2" />
        </VStack>
    )
}

export default AboutPage
