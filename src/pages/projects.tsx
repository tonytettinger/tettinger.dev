import * as React from 'react'

import { PostList } from '../components/PostList'
import Seo from '../components/Seo'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const ProjectsPage = () => {
    const posts: Node[] = usePosts('projects')
    const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)

    return (
        <>
            <Seo
                title="Projects"
                pathname="/projects/"
                description="Software projects by Antal Tettinger, including Xentral's CMS-managed homepage, an equity valuation application and this Gatsby website."
            />
            <PostList posts={sortedPosts} title="Projects" />
        </>
    )
}

export default ProjectsPage
