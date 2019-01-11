module.exports = {
  siteMetadata: {
    title: `Deals On Tap`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deals On Tap`,
        short_name: `DoT`,
        start_url: `/`,
        background_color: `#f6755e`,
        theme_color: `#f6755e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
        resolve:  `@wapps/gatsby-plugin-material-ui`,
        options: {
            theme: {
                primaryColor: '#f6755e',
            },
        },
    }
  ],
}
