import React from 'react'
import Link from 'gatsby-link'

import Bio from '../components/Bio'
import { ContentWrapper, PageWrapper } from '../components/Wrapper'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const Title = styled.h1`
  & > a {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }
`;

const HomepageTitle = styled(Title)`
  ${scale(1)};
  margin-bottom: ${rhythm(1)};
  margin-top: 0;

  @media(min-width: 35em) {
    ${scale(1.5)};
  }
`;
const SubpageTitle = styled(Title)``;

const HeaderWrapper = styled.div`
  background: #25303c;
  padding-bottom: 1em;
  & h1,
  & h3 {
    color: rgba(255, 255, 255, 0.95);
  }
`;

const FooterWrapper = styled.div`
  background: #25303c;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.85em;

  ${ContentWrapper} {
    padding: ${rhythm(0.5)} 0;
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
        <HomepageTitle>
          <Link to={'/'}>Building Wisr</Link>
        </HomepageTitle>
      )
    } else {
      header = (
        <SubpageTitle>
          <Link to={'/'}>Building Wisr</Link>
        </SubpageTitle>
      )
    }
    return (
      <PageWrapper>
        <HeaderWrapper>
          <ContentWrapper>
            {header}
            <Bio inverted />
          </ContentWrapper>
        </HeaderWrapper>
        <ContentWrapper minHeight="80vh">{children()}</ContentWrapper>
        <FooterWrapper>
          <ContentWrapper>
            <Bio inverted />
            &copy; {new Date().getFullYear()} Wisr, Inc.
          </ContentWrapper>
        </FooterWrapper>
      </PageWrapper>
    )
  }
}

export default Template
