import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../style/about.scss"

const About = () => {
  return (
    <div className="page" id="about">
      <div className="left">
        <div className="who">
          <h3>Who am I?</h3>

          <p>
            I'm a Web Developer focused on building fast, responsive, and
            maintainable web applications using modern frontend and backend
            technologies.
          </p>

          <p>
            My goal is to build clean user interfaces and efficient systems that
            deliver a smooth user experience.
          </p>
        </div>
        <div className="what">
          <h3>What I do</h3>
          <div className="variants">
            <div>Frontend Development</div>
            <div>Backend Development</div>
            <div>UI/UX Design (Figma Basics)</div>
            <div>System Architecture Fundamentals</div>
            <div>Microservices Architecture</div>
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
            that's why it is so complicated."
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
              Bachelor’s Degree in Computer Engineering - CHNU Yuriy Fedkovych
              (2020-2024)
            </div>
            <div>
              Master’s Degree in Computer Engineering - CHNU Yuriy Fedkovych
              (2024-2026)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
