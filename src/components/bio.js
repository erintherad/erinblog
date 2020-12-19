/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      vimeo: file(absolutePath: { regex: "/social/vimeo.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/social/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(absolutePath: { regex: "/social/instagram.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/social/twitter.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 65, height: 65, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            handle
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.fixed

  const social = data.site.siteMetadata?.social
  const linkedin = data?.linkedin?.childImageSharp?.fixed
  const twitter = data?.twitter?.childImageSharp?.fixed
  const instagram = data?.instagram?.childImageSharp?.fixed
  const vimeo = data?.vimeo?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          <p>Written by {author.name}</p>
          <span>
            {linkedin && (
                <a href={`https://www.linkedin.com/in/${social?.linkedin_handle || ``}`}>
                  <Image
                    fixed={linkedin}
                    alt="linkedin"
                    className="social-icons"
                  />
                </a>
              )}
            {` `}
            {twitter && (
              <a href={`https://twitter.com/${social?.handle || ``}`}>
                <Image
                  fixed={twitter}
                  alt="twitter"
                  className="social-icons"
                />
              </a>
            )}
            {` `}
            {instagram && (
              <a href={`https://www.instagram.com/${social?.handle || ``}`}>
                <Image
                  fixed={instagram}
                  alt="instagram"
                  className="social-icons"
                />
              </a>
            )}
            {` `}
            {vimeo && (
                <a href={`https://vimeo.com/${social?.vimeo_handle || ``}`}>
                  <Image
                    fixed={vimeo}
                    alt="vimeo"
                    className="social-icons"
                  />
                </a>
              )}
          </span>
        </div>
      )}
    </div>
  )
}

export default Bio
