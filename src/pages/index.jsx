import Layout from "../components/layout.js"
import Seo from "../components/seo.js"
import Home from "../components/home.tsx"
import React from "react"
import About from "../components/about.tsx"
import Skills from "../components/skills.tsx"
import Projects from "../components/projects.tsx"
import Contact from "../components/contact.tsx"

const IndexPage = () => (
  <Layout>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
