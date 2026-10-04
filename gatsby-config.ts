import path from 'path'

const gatsbyRequiredRules = path.join(
    process.cwd(),
    'node_modules',
    'gatsby',
    'dist',
    'utils',
    'eslint-rules'
)

module.exports = {
    siteMetadata: {
        siteUrl: 'https://tettinger.dev',
        title: 'Antal Tettinger · Product Engineer',
        description:
            'Berlin-based Senior Frontend Product Engineer focused on building high-quality, maintainable web experiences with real business impact.',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ['develop'],
                extensions: ['js', 'jsx', 'ts', 'tsx'],
                exclude: ['node_modules', 'bower_components', '.cache', 'public'],
            },
        },
        '@chakra-ui/gatsby-plugin',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'blog',
                path: `${__dirname}/blogposts`,
            },
            __key: 'blogposts',
        },
    ],
}
