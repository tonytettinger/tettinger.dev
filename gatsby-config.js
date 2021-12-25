module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "TonyTettinger.com",
    description: "Tony Tettingers' Blog"
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-N7VFFQ6ENG", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command.
        // This config will be shared across all trackingIds.
        gtagConfig: {
          // Anonymizes the last digits of the user’s IP.
          // To comply with policies and legal regulations.
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin.
        pluginConfig: {
          // As false it puts the tracking script in the body instead of the head.
          head: false,
          // Optional parameter to honor the Do Not Track feature.
          respectDNT: true,
        },
      },
    },
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
    "gatsby-plugin-theme-ui",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
      __key: "posts"
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp"
  ],
};
