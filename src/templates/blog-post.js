import * as React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Body1 from "../components/body1";
import Caption from "../components/caption";

const Post = styled.article`
  max-width: 1200px;
  background: ${(props) => props.theme.global.surface};
  border-radius: 4px;
  padding: 16px;
  p {
    font-size: 16px;
  }
  ul,
  ol {
    margin: 16px;
  }
`;

const PostNav = styled.nav`
  max-width: 1200px;
  ul {
    margin: 0;
    li {
      background: ${(props) => props.theme.global.surface};
      border-radius: 4px;
      padding: 16px;
      margin: 24px;
    }
  }
`;

const Hr = styled.hr`
  border: 0.5px solid ${(props) => props.theme.palette.gray300};
`;

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Post itemScope itemType="http://schema.org/Article">
        <header>
          <h3 itemProp="headline">{post.frontmatter.title}</h3>
          <Caption>{post.frontmatter.date}</Caption>
        </header>
        <Hr />
        <Body1
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </Post>
      <PostNav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous ? (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            ) : (
              <div>None</div>
            )}
          </li>
          <li>
            {next ? (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            ) : (
              <div>None</div>
            )}
          </li>
        </ul>
      </PostNav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
