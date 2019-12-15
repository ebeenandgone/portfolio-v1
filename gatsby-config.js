module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Hi, my name is Elliot. I'm a Web Developer with a strong passion for cybersecurity.`,
    author: `@ekeen`,
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Jockey One`, `sans-serif`
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ekeen dev portfolio`,
        short_name: `ekeendevp`,
        start_url: `/home`,
        background_color: `#272425`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
