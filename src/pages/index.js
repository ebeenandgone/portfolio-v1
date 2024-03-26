import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Resume from "../components/resumePdf"
import "../components/layout.css"
import { StaticImage } from 'gatsby-plugin-image';


const MyTestComponent = () => (
  <StaticImage src="../images/elliot-circle.png" alt="A description" />
  )

const IndexPage = () => {
  return (
      <Layout>
        <SEO title="Home" />
        <div class="container">

          <div class="item left-side">
            <div class="pro-pic">
              <Image />
              {/* <MyTestComponent /> */}
            </div>
            <div>
              <h1 style={{ color: `#e9c453` }}>Hi, my name is Elliot.</h1>
              <h3>I'm a Web Developer with a strong passion for cybersecurity.</h3>
            </div>
          </div>

          <div class="item right-side">
            <a href="mailto:glimpse_fork_0d@icloud.com">let's talk</a>
            <Resume/>
            <a href="https://www.linkedin.com/in/elliot-keen/">linkedin</a>
          </div>

        </div>
      </Layout>
  )
}

export function Head() {
  return (
    <link href="https://fonts.googleapis.com/css?family=Jockey+One&display=swap" rel="stylesheet"></link>
  )
}

export default IndexPage
