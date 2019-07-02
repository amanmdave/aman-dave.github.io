import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import {kebabCase} from "lodash";
import Fade from 'react-reveal/Fade';

const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout>
          <h2>Aman Dave</h2><hr/><br/>
          <Fade right>
            <div className="post-list" style={{border: "1px solid #007bff"}}>
                {posts.map(post => (
                    <div key={post.node.id} className="post-list__item">
                        <div className="post-list__thumbnail">
                            <Link to={post.node.fields.slug}>
                                <Img
                                    fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                                />
                            </Link>
                        </div>
                        <div className="post-list__content">
                            <h2>{post.node.frontmatter.title}</h2>

                            {post.node.frontmatter.tags ? (
                                <div className="tags-container">
                                    <ul className="taglist">
                                        {post.node.frontmatter.tags.map(tag => (
                                            <li key={tag + `tag`}>
                                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}

                            <p>{post.node.frontmatter.date}</p>
                            <div className="post-list__excerpt">{post.node.excerpt}</div>
                            <Link to={post.node.fields.slug}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
          </Fade>
        </Layout>
    );
};
export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
//blog.js
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          } 
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
