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
  html {
    background: white;
  }
  html, body, #___gatsby {
    height: 100%;
  }
  body {
    height: 100%;
    background: linear-gradient(#CEE2F3, #FFFFFF);
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
