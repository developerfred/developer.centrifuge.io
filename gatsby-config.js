module.exports = {
  siteMetadata: {
    title: `Centrifuge Developer`,
    siteUrl: process.env.URL || "http://localhost:8000",
    description: `A Decentralized Operating System For The Financial Supply Chain`,
    author: `@centrifuge`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cent-node`,
        path: `${__dirname}/docs/cent-node`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tinlake`,
        path: `${__dirname}/docs/tinlake`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        hastPlugins: [require("rehype-slug")],

      }
    },
    {
      resolve: 'gatsby-redirect-from',
      options: {
        query: 'allMdx'
      }
    },
    'gatsby-plugin-meta-redirect',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `centrifuge-developers`,
        short_name: `centrifuge`,
        start_url: `/cent-node/overview/introduction/`,
        background_color: `#fff`,
        theme_color: `#2762ff`,
        display: `minimal-ui`,
        icon: `src/images/centrifuge-logo.png`
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify`
  ]
};
