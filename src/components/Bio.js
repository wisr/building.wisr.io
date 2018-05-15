import React from 'react'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          justifyContent: "flex-start",
        }}
      >
        <p>
          Wisr helps colleges and universities build online communities where
          alumni and students can connect to drive meaningful career outcomes.
        </p>
      </div>
    )
  }
}

export default Bio
