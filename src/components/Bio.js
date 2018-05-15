import React from 'react'

import styled from "styled-components";
import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({inverted})=> inverted ? "rgba(255, 255, 255, 0.8)" : "inherit"};
`;

const P = styled.p`
  margin-bottom: .5em;
  & a {
    color: inherit;
  }

  smaller {
    font-size: .8em;
  }
`;

class Bio extends React.Component {
  render() {
    return (
      <Wrapper inverted={this.props.inverted}>
        <P>
          Wisr helps colleges and universities build online communities where
          alumni and students can connect to drive meaningful career outcomes.
        </P>
        <P>
          <smaller>
            <strong>
              Learn more at <a href="https://getwisr.com/">getwisr.com</a>
            </strong>
          </smaller>
        </P>
      </Wrapper>
    )
  }
}

export default Bio
