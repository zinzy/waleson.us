module.exports = {
  siteMetadata: {
    siteUrl: "https://www.waleson.us",
    title: "Waleson.us",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
