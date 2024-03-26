import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "elliot-circle.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300 
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  // // Check if `data.fileName.childImageSharp` is not undefined
  // const image = data.fileName && data.fileName.childImageSharp
  //   ? getImage(data.fileName.childImageSharp.gatsbyImageData)
  //   : null;

  // // Conditionally render the GatsbyImage component
  // return image ? <GatsbyImage image={image} alt="A man smiling at the camera." /> : <p>Image not found</p>;

  return <StaticImage src="../images/elliot-circle.png" alt="A description" />;
}

export default Image