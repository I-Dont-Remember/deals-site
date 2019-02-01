module.exports = {
  siteMetadata: {
    title: `Deals On Tap`,
    description: `Deals. Now.`,
    author: `kpquinn2@wisc.edu`,
    site_env: process.env.SITE_ENV
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
    `gatsby-transformer-yaml`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
          ignore: [`**/\.*`, `**\.todo`], // ignore files starting with a dot & .todo files
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Deals On Tap`,
        short_name: `DealsOnTap`,
        start_url: `/`,
        background_color: `#f9060e`,
        theme_color: `#f9060e`,
        display: `minimal-ui`,
        icon: `src/images/beer-tap.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
        resolve:  `@wapps/gatsby-plugin-material-ui`,
        options: {
            theme: {
                primaryColor: '#f9060e',
            },
        },
    }
  ],
}
