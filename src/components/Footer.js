import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { MessageSquare, Facebook, Mail } from 'react-feather'

const FooterOuter = styled.footer`
  margin-top: 1em;
  padding: 0 20px;
`

const FooterInner = styled.div`
  padding: 20px 0;
  text-align: center;
`

const logoLinkStyles = css`
  text-decoration: none;
  color: inherit;
  padding: 0 10px;
  transition: .2s;
  &:hover {
    opacity: 0.5
  }
`

const Footer = () => (
  <FooterOuter>
    <FooterInner>
      <a className={logoLinkStyles} href='https://www.facebook.com/groups/2046706728941748/' target='_blank'>
        <Facebook />
      </a>
      <a className={logoLinkStyles} href='https://community.humanetech.com/' target='_blank'>
        <MessageSquare />
      </a>
      <a className={logoLinkStyles} href='mailto:newsletter@humanetechsf.com' target='_blank'>
        <Mail />
      </a>
    </FooterInner>
  </FooterOuter>
)

export default Footer
