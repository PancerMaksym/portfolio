import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../style/projects.scss"
import {
  SiCloudinary,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiShopify,
  SiTypescript,
  SiVite,
} from "react-icons/si"

const Projects = () => {
  return (
    <div className="page" id="projects">
      <div className="project">
        <div className="text">
          <h3>Buisnes Card</h3>
          <div>
            My personal business card website, built with GatsbyJS and SCSS.
            Features: responsive design, contact details with copy-to-clipboard
            functionality, and custom styling without UI frameworks.
          </div>
          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiHtml5 />
                <SiSass />
                <SiTypescript />
                <SiGatsby />
              </div>
            </div>
            <Link to="https://b-card-mu.vercel.app/">Visit</Link>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="BuisnesCard" src="../images/bcard.png" />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <h3>Create Resume</h3>
          <div>
            The web application is built with Next.js, using TypeScript for type
            safety and SCSS for styling. JWT is used for secure registration and
            login, while user data is stored in MongoDB.
            <br />
            Users can search for specialists by tags or log in to create their
            own resume. Photos can be added to resumes and are stored on
            Cloudinary, providing easy media management.
          </div>
          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiSass />
                <SiTypescript />
                <SiNextdotjs />
                <SiGraphql />
                <SiMongodb />
                <SiCloudinary />
              </div>
            </div>
            <Link to="https://create-resume-wheat.vercel.app/">Visit</Link>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="ResumeIcon" src="../images/resume.png" />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <h3>Shopify Shop</h3>
          <div>
            The e-commerce platform is built with Next.js, using TypeScript for
            type safety and SCSS for styling. Product pages are stored in local
            state using Zustand.
            <br />
            With Storefront API and Admin API, users can register, add products
            to the cart, place orders, and pay via Stripe. PostgreSQL is used to
            link the cart to individual users, and order history is available
            for review.
          </div>
          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiSass />
                <SiTypescript />
                <SiNextdotjs />
                <SiGraphql />
                <SiPostgresql />
                <SiShopify />
              </div>
            </div>
            <Link to="https://next-shopify-xi.vercel.app/">Visit</Link>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="ShopifyIcon" src="../images/store.png" />
        </div>
      </div>
      <div className="project">
        <div className="text">
          <h3>Weather Site</h3>
          <div>
            A single-page application that retrieves and displays weather data
            for multiple cities using the OpenWeather API. The project features
            persistent storage of user-selected cities and weather information
            in LocalStorage, responsive design styled with SCSS, and an
            interactive map with markers providing real-time weather insights
            for each location.
          </div>
          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiHtml5 />
                <SiSass />
                <SiTypescript />
                <SiReact />
                <SiVite />
              </div>
            </div>
            <Link to="https://info-weather.vercel.app/">Visit</Link>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="WeatherIcon" src="../images/weather.png" />
        </div>
      </div>
    </div>
  )
}

export default Projects
