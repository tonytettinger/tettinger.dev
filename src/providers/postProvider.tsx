import * as React from 'react'

import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

import { type Node, type QueryData } from '../types'

export const PostsContext = React.createContext<Node[] | []>([])

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = React.useState<Node[]>([])
    const data: QueryData = useStaticQuery(graphql`
        query {
            allMdx {
                edges {
                    node {
                        id
                        body
                        frontmatter {
                            title
                            category
                            hero_image_alt
                            hero_image_credit_link
                            hero_image_credit_text
                            stack_list
                            order
                            hero_image {
                                childImageSharp {
                                    gatsbyImageData(formats: [AUTO, WEBP])
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    React.useEffect(() => {
        setPosts(data.allMdx.edges.map((item: { node: Node }) => item.node))
    }, [data])

    return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
}

export const usePosts = (category = '') => {
    const posts = React.useContext(PostsContext)
    if (!posts) {
        throw new Error('usePosts must be used within a PostProvider')
    }
    if (category) {
        console.log('posts are', posts)
        return posts.filter((post) => post.frontmatter.category === category)
    }
    return posts
}
