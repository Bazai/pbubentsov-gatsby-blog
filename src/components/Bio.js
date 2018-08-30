import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './bazzy_60x60.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Павел Бубенцов`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Думаю, читаю, играю, исследую, ‍<br />
          <em>дизайню</em>, 
          пишу <strong>тексты</strong>{' '}
          и <code>code</code>{' '}
        </p>
      </div>
    )
  }
}

export default Bio
