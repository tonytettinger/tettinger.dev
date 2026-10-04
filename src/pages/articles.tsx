import * as React from 'react'

import { ArticleList } from '../components/ArticleList'
import Seo from '../components/Seo'
import { usePosts } from '../providers/postProvider'
import { type Node } from '../types'

const ArticlePage = () => {
    const posts: Node[] = usePosts('article')
    const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order)

    return (
        <>
            <Seo
                title="Articles"
                pathname="/articles/"
                description="Articles by Antal Tettinger on software engineering, building products and lessons from books and projects."
            />
            <ArticleList posts={sortedPosts} title="Articles" />
        </>
    )
}

export default ArticlePage
