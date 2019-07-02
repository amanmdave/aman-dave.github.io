import React from "react"
import SEO from "../components/seo"
import Profile from "../components/profile"
import Fade from 'react-reveal/Fade';

const IndexPage = () => (
  <div className="container">
    <SEO title="Home" />
    <Fade bottom big>
      <Profile name="Aman Dave" role="Full Stack Engineer" profilepicture={require('../images/aman.png')}  linkedin="https://www.linkedin.com/in/aman-dave/" email="mailto:amandave1999@gmail.com" github="https://github.com/wizArD-1910" />
    </Fade>
  </div>
)

export default IndexPage
