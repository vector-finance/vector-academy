import * as React from "react";
import { PageProps, Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Banner from "../components/banner";
import Caption from "../components/caption";
import Body1 from "../components/body1";
import Seo from "../components/seo";

const PostList = styled.ul`
  width: 100%;
  list-style: none;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const PostItem = styled.article`
  border-radius: 4px;
  margin-bottom: 40px;
  padding: 24px;
  background: ${(props) => props.theme.global.surface};

  p {
    margin-bottom: 0;
  }

  header {
    margin-bottom: 4px;
  }
`;

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length == 0) {
    <Layout>
      <Seo title="Vector Academy" />
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
    </Layout>;
  }

  return (
    <>
      <Layout>
        <Seo title="Vector Academy" />
        <Banner />
        <PostList>
          {posts.map(
            (post: {
              frontmatter: {
                title: any;
                date:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                description: any;
              };
              fields: { slug: React.Key | null | undefined };
              excerpt: any;
            }) => {
              const title = post.frontmatter.title || post.fields.slug;
              return (
                <li key={post.fields.slug}>
                  <PostItem itemScope itemType="http://schema.org/Article">
                    <header>
                      <h4>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h4>
                      <Caption>{post.frontmatter.date}</Caption>
                    </header>
                    <section>
                      <Body1
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </PostItem>
                </li>
              );
            }
          )}
        </PostList>
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
