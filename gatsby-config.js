module.exports = {
  siteMetadata: {
    title: `Climatescape`,
    description: `Climatescape is a free database of organizations and resources to combat climate change`,
    author: `@bloudermilk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appXCd5jCvXVSxDcZ`,
            tableName: `Organizations`,
            tableView: `Published`,
            mapping: { "Published": `boolean` },
            tableLinks: [`Sector`]
          },
          {
            baseId: `appXCd5jCvXVSxDcZ`,
            tableName: `Sectors`,
            tableView: `Published`,
            mapping: { "Cover": `fileNode` },
            tableLinks: [`Organizations`]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defautQuality: 75,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`
  ],
}
