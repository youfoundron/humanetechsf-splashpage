import React from 'react'
import styled from 'react-emotion'
import Page from '../components/Page'
import SignupForm from '../components/SignupForm'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 30em;
`

const P = styled.p`
  line-height: 1.5;
  font-size: 1.25rem;
`

export default () => (
  <Page>
    <Container>
      <h1>Humane Tech</h1>
      <h2>San Francisco</h2>
      <br />
      <P>We are Humane Tech SF, the Center for Humane Technology's San Francisco community chapter.</P>
      <br />
      <P>We are a group of volunteers organizing discussions around ethics in technology.</P>
      <br />
      <P>All are welcome to the conversation.</P>
      <br />
      <SignupForm />
    </Container>
  </Page>
)
