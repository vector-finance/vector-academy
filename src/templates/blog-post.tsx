import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import { PostDate } from "../components/post-date";
import { PostContainer } from "../components/post-container";

const PostTemplate: React.FC<PageProps> = ({ data, location }) => {
  const post = data.markdownRemark;
  const metaData = data.site.siteMetadata;
  const { title, description, siteUrl, author } = metaData;
  const { title: postTitle, date } = post.frontmatter;

  return (
    <Layout>
      <h2>{postTitle}</h2>
      <PostDate date={date} />
      <PostContainer html={post.html} />
    </Layout>
  );
};

export default PostTemplate;

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
