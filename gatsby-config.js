/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: "jinnyseo", // delete or `undefined` to disable password protection
      },
    },
  ],
}
