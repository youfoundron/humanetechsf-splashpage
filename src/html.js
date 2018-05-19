import React from 'react'

// let styles
// if (process.env.NODE_ENV === 'production') {
//   try {
//     styles = require(`!raw-loader!../public/styles.css`)
//   } catch (e) {
//     console.log(e)
//   }
// }

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=320, initial-scale=1.0, shrink-to-fit=yes user-scalable=no'
      />

      {/* Fonts + Favicon */}
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />

      <title>Humane Tech SF</title>
      <meta property='description' content="The Center for Humane Technology's unofficial SF community chapter." />

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='article:author' content='Humane Tech SF' />

      {/* Facebook open graph meta */}
      <meta property='og:title' content='Humane Tech SF' />
      <meta property='og:description' content="The Center for Humane Technology's unofficial SF community chapter." />
      <meta property='og:url' content='https://humanetechsf.com' />
      <meta property='og:image' content='/humanetech-banner.png' />

      {/* Twitter card meta */}
      {/* <meta name='twitter:card' content='summary' /> */}
      {/* <meta name='twitter:site' content='@humanetechsf' /> */}

      {/* Styles */}
      {/* {process.env.NODE_ENV === 'production' ? (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null} */}
    </head>
    <body>
      <div
        id='___gatsby'
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

export default Html
