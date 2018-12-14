import React from 'react';

import Bio from '../components/Bio';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import styled from "styled-components";
import { rhythm, scale } from '../utils/typography';

const Label = styled.span`
  display: block;
`;

const StyledLink = styled(Link)`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostContent = styled.div`
  & strong {
    font-weight: 500;
  }

  & p {
    line-height: 1.5rem;
  }

  & a {
    color: #333;
  }

  & figcaption {
    color: #333;
    font-size: .8rem;
    max-width: 590px;
    text-align: center;
    margin: -1rem auto 2rem auto;
    font-weight: 400;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            marginLeft: 0,
            marginReft: 0,
            padding: 0,
          }}
        >
          {previous && previous.frontmatter.published && (
            <li>
              <Label>Previous Post</Label>
              <StyledLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </StyledLink>
            </li>
          )}

          {next && next.frontmatter.published && (
            <li>
              <Label>Next Post</Label>
              <StyledLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </StyledLink>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        published
      }
    }
  }
`
