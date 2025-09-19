import * as React from "react"
import { Link } from "gatsby"
import "../style/header.scss"
import { useEffect } from "react"

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    } else {
      console.error("Loh")
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll("header button")
              .forEach(btn => btn.classList.remove("active"))
            const el = document.getElementById(`${entry.target.id}-button`)
            el?.classList.add("active")
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
      }
    )

    const boxElList = document.querySelectorAll(".page")
    boxElList.forEach(el => {
      io.observe(el)
    })
  }, [])

  return (
    <header className="header">
      <button id="home-button" onClick={() => handleScroll("home")}>
        HOME
      </button>
      <button id="about-button" onClick={() => handleScroll("about")}>
        ABOUT ME
      </button>
      <button id="skills-button" onClick={() => handleScroll("skills")}>
        SKILLS
      </button>
      <button id="projects-button" onClick={() => handleScroll("projects")}>
        PROJECTS
      </button>
      <button id="contact-button" onClick={() => handleScroll("contact")}>
        CONTACT
      </button>
    </header>
  )
}

export default Header
