import '@fontsource/zilla-slab'
import * as React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import { PostList } from '../components/PostList'
import { QueryData } from '../types'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: { frontmatter: { category: { eq: "projects" } } }) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            hero_image_alt
                            hero_image_credit_link
                            hero_image_credit_text
                            hero_image {
                                childImageSharp {
                                    gatsbyImageData(formats: [AUTO, WEBP])
                                }
                            }
                            stack_list
                            order
                        }
                        body
                    }
                }
            }
        }
    `)

    const posts: QueryData[] = data.allMdx.edges
    const sortedPosts = posts.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
    return <PostList posts={sortedPosts} title="Projects" />
}

export default ProjectsPage
