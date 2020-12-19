/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import SocialIcon from "./social"

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
  const author = data?.site.siteMetadata?.author
  const avatar = data?.avatar?.childImageSharp?.fixed

  const linkedin = data?.linkedin?.childImageSharp?.fixed
  const twitter = data?.twitter?.childImageSharp?.fixed
  const instagram = data?.instagram?.childImageSharp?.fixed
  const vimeo = data?.vimeo?.childImageSharp?.fixed

  console.log(data)

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
          <div>
            <SocialIcon media={linkedin} href="https://www.linkedin.com/in/" alt="LinkedIn" handle="erinmahoneyphoto" />
            <SocialIcon media={twitter} href="https://twitter.com/" alt="Twitter" />
            <SocialIcon media={instagram} href="https://www.instagram.com/" alt="Instagram" />
            <SocialIcon media={vimeo} href="https://vimeo.com/" alt="Vimeo" handle="erinmahoney" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
