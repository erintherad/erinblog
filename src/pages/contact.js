import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Contact = ({ location }) => {
    const data = useStaticQuery(graphql`
    query ContactMetaData {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          title
        }
      }
    }
  `)

    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <div className="about-wrapper">
                <div className="about-content">
                    <h2 className="about-heading">Let's connect.</h2>
                    <p>
                    If you'd like to get in touch: 
                    erinmahoneyphoto (@) gmail.com
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact