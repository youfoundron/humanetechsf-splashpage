import React from 'react'
import { css } from 'emotion'
import { mq } from './util'

const noMarginAndNoPaddingStyles = css`margin: 0; padding: 0;`
const borderNoneStyles = css`border-style: none; border-width: 0;`
const boxShadow = css`box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);`
const clearFixStyles = css`
  &:before, &:after { content: " "; display: table; }
  &:after { clear: both; }
  & { *zoom: 1; }
`

export default () => (
  <form
    action='https://humanetechsf.us18.list-manage.com/subscribe/post?u=52e2af1556b51364869aeb15c&amp;id=09c5a76255' method='post' id='mc-embedded-subscribe-form'
    name='mc-embedded-subscribe-form'
    target='_blank'
    noValidate
  >
    <fieldset className={`${clearFixStyles} ${borderNoneStyles} ${noMarginAndNoPaddingStyles}`}>
      <legend className={css`padding-bottom: .875rem;`}><h2>Join our Newsletter</h2></legend>
      <div className={`${clearFixStyles} ${boxShadow}`}>
        <input
          className={css`
            outline: 0;
            border: 0;
            ${borderNoneStyles}
            padding: 1rem;
            float: left;
            ${css(mq({
              'font-size': ['.875rem', '.875rem', '1rem'],
              width: ['100%', '75%', '80%']
            }))}
          `}
          type='email'
          name='EMAIL'
          id='mce-EMAIL'
          placeholder='Your Email Address'
          required
        />
        <input
          className={css`
            outline: 0;
            border: 0;
            ${borderNoneStyles}
            padding: 1rem;
            float: left;
            text-align: center;
            background: black;
            color: white;
            font-weight: bold;
            border-radius: 0;
            -webkit-appearance: none;
            cursor: pointer;
            ${css(mq({
              'font-size': ['.875rem', '.875rem', '1rem'],
              width: ['100%', '25%', '20%']
            }))}
            transition: opacity .2s;
            &:hover {
              opacity: 0.5
            }
          `}
          type='submit'
          value='Sign Up'
          name='subscribe'
        />
        <div
          style={{position: 'absolute', left: -5000}}
          aria-hidden
        >
          <input
            type='text'
            name='b_c65898deff3b28aa061abf1e6_fb9ffc2e71'
            tabIndex='-1'
            value=''
          />
        </div>
      </div>
    </fieldset>
  </form>
)
