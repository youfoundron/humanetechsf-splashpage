module.exports = {
  plugins: [
    // analytics & SEO
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-52765720-4' }
    },
    // style pre-processing & optimization
    'gatsby-plugin-emotion'
  ]
}
