module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tonytettinger.com",
    title: "tonytettinger.com website",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-N7VFFQ6ENG",
      },
    },
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blogposts`,
      },
      __key: "blogposts",
    },
  ],
};
