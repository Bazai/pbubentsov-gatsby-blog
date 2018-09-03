import React from 'react'
import Link from 'gatsby-link'

// Import typefaces
import 'typeface-merriweather'

import profilePic from './bazzy_60x60.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const defaultMotto = 'Думаю, читаю, играю, исследую,\nдизайню, пишу тексты и код'

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
          alignItems: 'center'
        }}
      >
        <Link to="/" style={{ lineHeight: 1 }}>
          <img
            src={profilePic}
            alt={`Павел Бубенцов`}
            style={{
              marginRight: rhythm(1),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
        </Link>
        <p style={{ marginBottom: 0 }}>
          {this.props.showName && <Link to="/" style={{ display: 'block' }}>
            Павел Бубенцов
          </Link>}
          {(this.props.motto || defaultMotto).split('\n').map((item, key) => {
          return <span key={key}>{item}<br /></span>
        })}</p>
      </div>
    )
  }
}

export default Bio