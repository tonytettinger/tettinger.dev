const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Update the query to include the category field
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        slug
                        id
                        frontmatter {
                            category
                        }
                    }
                }
            }
        }
    `)

    // Check if we have results
    if (result.errors) {
        console.error(result.errors)
        return
    }

    // Check if allMdx exists and has edges
    if (!result.data || !result.data.allMdx || !result.data.allMdx.edges) {
        console.log('No MDX files found or query structure is incorrect')
        return
    }

    const articleTemplate = path.resolve(`./src/components/ArticleTemplate.tsx`)

    // Make sure the template exists
    try {
        require.resolve(articleTemplate)
    } catch (e) {
        console.error(`Template file not found: ${articleTemplate}`)
        return
    }

    // Filter for articles and create pages only for them
    result.data.allMdx.edges
        .filter(({ node }) => node.frontmatter.category === 'article')
        .forEach(({ node }) => {
            console.log('Creating article page for:', node.slug)
            createPage({
                path: `/articles/${node.slug}`,
                component: articleTemplate,
                context: { id: node.id },
            })
        })
}
