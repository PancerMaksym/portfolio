import * as React from "react"
import { useEffect, useState } from "react"
import "../style/header.scss"

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false) // закриваємо мобільне меню після кліку
    } else {
      console.error("Section not found:", id)
    }
  }

  useEffect(() => {
    // ✅ перевірка ширини екрану
    const checkWidth = () => setIsDesktop(window.innerWidth > 900)
    checkWidth()
    window.addEventListener("resize", checkWidth)

    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll("header button, .menu-list button")
              .forEach(btn => btn.classList.remove("active"))
            const el = document.getElementById(`${entry.target.id}-button`)
            el?.classList.add("active")
          }
        })
      },
      { threshold: 0.6 }
    )

    const boxElList = document.querySelectorAll(".page")
    boxElList.forEach(el => io.observe(el))

    return () => {
      io.disconnect() // ✅ cleanup
    }
  }, [])

  if (isDesktop) {
    return (
      <header className="header">
        <button id="home-button" onClick={() => handleScroll("home")}>HOME</button>
        <button id="about-button" onClick={() => handleScroll("about")}>ABOUT ME</button>
        <button id="skills-button" onClick={() => handleScroll("skills")}>SKILLS</button>
        <button id="projects-button" onClick={() => handleScroll("projects")}>PROJECTS</button>
        <button id="contact-button" onClick={() => handleScroll("contact")}>CONTACT</button>
      </header>
    )
  }

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && (
        <div className="menu-list">
          <button id="home-button" onClick={() => handleScroll("home")}>HOME</button>
          <button id="about-button" onClick={() => handleScroll("about")}>ABOUT ME</button>
          <button id="skills-button" onClick={() => handleScroll("skills")}>SKILLS</button>
          <button id="projects-button" onClick={() => handleScroll("projects")}>PROJECTS</button>
          <button id="contact-button" onClick={() => handleScroll("contact")}>CONTACT</button>
        </div>
      )}
    </div>
  )
}

export default Header
