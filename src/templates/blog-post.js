import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Img from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteMotto = get(this.props, 'data.site.siteMetadata.motto')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} — ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
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
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio motto={siteMotto} showName />
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
        motto
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
            childImageSharp{
                sizes(maxWidth: 1024, quality: 90) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
      }
    }
  }
`
