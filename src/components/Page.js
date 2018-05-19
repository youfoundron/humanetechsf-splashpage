import styled, { css } from 'react-emotion'
import { mq } from './util'

const Page = styled.div`
  padding: 0 20px;
  ${css(mq({
    'margin-top': ['0em', '3em']
  }))}
`

export default Page
