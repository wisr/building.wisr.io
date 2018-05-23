module.exports = {
  siteMetadata: {
    title: 'Building Wisr',
    author: 'Wisr, Inc.',
    description: 'The Wisr product blog for site admins. Updates and announcements about new features and ongoing development.',
    siteUrl: 'https://building.wisr.io/',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77902999-8",
        exclude: ["/preview/**"],
      },
    },
    // FIXME: Remove this after release of Gatsby v2
    // This is here to fix a bug that causes the site to occasionally 404
    // if you load a page that is trying to access deleted files.
    // https://github.com/gatsbyjs/gatsby/issues/3582
    'gatsby-plugin-remove-serviceworker'
  ],
}
