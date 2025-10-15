import * as React from 'react'

import { ArticleList } from '../components/ArticleList'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const ArticlePage = () => {
    const posts: Node[] = usePosts('article')
    const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)

    return <ArticleList posts={sortedPosts} title="Articles" />
}

export default ArticlePage
