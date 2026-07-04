import React from "react"
import "../style/home.scss"
import "@fontsource/lancelot"
import { FaArrowDown } from "react-icons/fa"

const Home = () => {
  return (
    <div className="page" id="home">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="hello">
        <h3 className="i-am">I'm a</h3>
        <h1 className="software">
          Full-Stack
          <br />
          Web Developer
        </h1>
      </div>
      <div className="short-text">
        Hi, I'm Pantsyr Maksym, a Web Developer.
        <br />
        Let's build modern and scalable <br />
        applications together.
      </div>
      <div className="scroll-bundle">
        <div className="scroll-text">Scroll down</div>
        <FaArrowDown />
      </div>
    </div>
  )
}

export default Home
