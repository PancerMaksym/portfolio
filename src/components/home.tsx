import React from "react"
import "../style/home.scss"
import "@fontsource/lancelot";

const Home = () => {
  return (
    <div className="page" id="home">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="hello">
        <h3 className="i-am">I'm a</h3>
        <h1 className="software">Web<br/> Developer</h1>
      </div>
      <div className="short-text">
        Hi, i'm Pantsyr Maksym,<br/>a web-developer. <br/>Let's create a cool<br/>site together.
      </div>
      <div className="scroll-text">Scroll down</div>
    </div>
  )
}

export default Home;