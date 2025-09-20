import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../style/about.scss"

const About = () => {
  return (
    <div className="page" id="about">
      <div className="left">
        <div className="who">
          <h3>Who i am?</h3>
          <div>
            I'm a passionate web developer with a strong background in frontend
            and backend technologies. I love creating clean and functional
            designs that enhance user experience
          </div>
        </div>
        <div className="what">
          <h3>What i do?</h3>
          <div className="variants">
            <div>API Integration</div>
            <div>Backend</div>
            <div>UI/UX Basics & Design in Figma</div>
            <div>Frontend Development</div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="top">
          <div className="smart">
            "Design can be art.
            <br />
            Design can be aesthetics.
            <br />
            Design is so simple,
            <br />
            that's why it is so complicated"
          </div>
          <div className="author">Paul Rand</div>
        </div>
        <div className="photo">
          <StaticImage
            src="../images/photo.png"
            alt="Profile illustration"
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </div>
      <div className="right">
        <div className="education">
          <h3>Education</h3>
          <div className="variants">
            <div>
              Bachelor's Computer Engineering - CHNU Yuriy Fedkovych (2020-2024)
            </div>
            <div>
              Master's Computer Engineering - CHNU Yuriy Fedkovych (2024-Today)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
