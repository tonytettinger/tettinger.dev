import * as React from 'react'

import { PostList } from '../components/PostList'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const ProjectsPage = () => {
    const posts: Node[] = usePosts('projects')
    const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)

    return <PostList posts={sortedPosts} title="Projects" />
}

export default ProjectsPage
