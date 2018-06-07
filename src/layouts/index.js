import React from 'react'
import Link from 'gatsby-link'

import Bio from '../components/Bio';
import { ContentWrapper, PageWrapper } from "../components/Wrapper";
import { rhythm, scale } from '../utils/typography'
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #25303C;
  padding-bottom: 1em;
  & h1,
  & h3 {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const FooterWrapper = styled.div`
  background: #25303C;
  color: rgba(255, 255, 255, 0.95);
  font-size: .85em;

  ${ContentWrapper} {
    padding: ${rhythm(.5)} 0;
  }

  & h1,
  & h3 {
    color: rgba(255, 255, 255, 0.95);
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h3
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Building Wisr
          </Link>
        </h3>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Building Wisr
          </Link>
        </h3>
      )
    }
    return (
      <PageWrapper>
        <HeaderWrapper>
          <ContentWrapper>
            {header}
            <Bio inverted/>
          </ContentWrapper>
        </HeaderWrapper>
        <ContentWrapper minHeight="80vh">
          {children()}
        </ContentWrapper>
        <FooterWrapper>
          <ContentWrapper>
            <Bio inverted/>
            &copy; {new Date().getFullYear()} Wisr, Inc.
          </ContentWrapper>
        </FooterWrapper>
      </PageWrapper>
    )
  }
}

export default Template
