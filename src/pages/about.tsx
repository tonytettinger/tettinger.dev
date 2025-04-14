import * as React from 'react'

import { Heading, Text, VStack } from '@chakra-ui/react'

import { PostList } from '../components/PostList'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const AboutPage = () => {
    const posts: Node[] = usePosts('thoughts')

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
