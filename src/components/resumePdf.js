import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
    const data = useStaticQuery(graphql`
        query PDFs{
            allFile(filter: { extension: { eq: "pdf" } }) {
                edges {
                    node {
                        publicURL
                    }
                }
            }
        }
    `)
    return  <a href={data.allFile.edges[0].node.publicURL}>resume</a>
    }

export default Resume