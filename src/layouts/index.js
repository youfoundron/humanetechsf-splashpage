import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

import Header from '../components/Header'
import Footer from '../components/Footer'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro'),
      local('SourceSansPro-Regular'),
      url(/fonts/SourceSansPro-Regular.woff2)
      format('woff2');
  }
  html {
    background: white;
  }
  html, body, #___gatsby {
    height: 100%;
  }
  body {
    height: 100%;
    background: linear-gradient(#F6D9D9, #FFFFFF);
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 100vh;
`

const ChildrenWrapper = styled.div`
  flex: 1 1 auto;
`

const Layout = ({ children }) => (
  <PageWrapper>
    <Header />
    <ChildrenWrapper>{children()}</ChildrenWrapper>
    <Footer />
  </PageWrapper>
)

export default Layout
