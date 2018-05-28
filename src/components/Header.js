import React from 'react'
import styled from 'react-emotion'

const HeaderOuter = styled.header`padding: 0 20px;`
const HeaderInner = styled.div`padding: 20px 0;`
const Logo = () => (
  <img src={require('../../static/humanetech-logo.png')} width={240} />
)

const Header = () => (
  <HeaderOuter>
    <HeaderInner>
      <a href='http://humanetech.com' target='_blank'>
        <Logo />
      </a>
    </HeaderInner>
  </HeaderOuter>
)

export default Header
