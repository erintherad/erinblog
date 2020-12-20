import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const About = ({ location }) => {
    const data = useStaticQuery(graphql`
    query AboutMetaData {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          title
        }
      }
      profile: file(absolutePath: { regex: "/profile-pic2.png/" }) {
        childImageSharp {
          fixed(width: 330, height: 330, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    const siteTitle = data.site.siteMetadata?.title || `Title`
    const author = data?.site.siteMetadata?.author
    const profile = data?.profile?.childImageSharp?.fixed

    return (
        <Layout location={location} title={siteTitle}>
            <div className="about-wrapper">
                {profile && (
                    <Image
                    fixed={profile}
                    alt={author?.name || ``}
                    className="bio-avatar"
                    />
                )}
                <div className="about-content">
                    <h2 className="about-heading">Hello, I'm Erin.</h2>
                    <p>
                        I am a creative technologist currently based in Austin, Texas. 
                        My background is in photography and design but I currently 
                        engineer manage at Indeed working with design systems. I am 
                        passionate about bridging the gap between art, technology, and 
                        people.
                    </p>
                    <p>
                        When not working, I enjoy hiking, traveling, and cooking. 
                        This blog is a reflection of my interests and highlights of a 
                        moment worth capturing.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About