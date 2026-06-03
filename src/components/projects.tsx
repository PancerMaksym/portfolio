import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../style/projects.scss"
import {
  SiCloudinary,
  SiDocker,
  SiGatsby,
  SiGraphql,
  SiHtml5,
  SiKubernetes,
  SiNestjs,
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
        <div className="info">
          <div className="text">
            <h3>IoT Setvice</h3>
            <div>
              Developed a distributed IoT system for real-time audio data
              collection, streaming, and anomaly detection. The system is built
              on a microservices architecture (Nx, NestJS, Next.js), using
              ESP32-S3 for data acquisition, TCP/HTTP/WebSocket for
              communication, and TensorFlow.js (YAMNet) for audio anomaly
              detection. Implemented audio streaming, signal processing, event
              storage, and a web-based monitoring interface.
            </div>
          </div>
          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiNextdotjs />
                <SiNestjs />
                <SiSass />
                <SiTypescript />
                <SiKubernetes />
                <SiDocker />
                <SiPostgresql />
              </div>
            </div>
            <a target="_blank"  href="https://github.com/PancerMaksym/iot-monorepo/">
              Visit
            </a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="IotService" src="../images/iot.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>MyPortfolio</h3>
            <div>
              Developed a personal portfolio website using React, Next.js, and
              SCSS. Built a fully responsive and scalable interface with custom
              UI components, smooth navigation, and optimized performance.
              Deployed on Vercel for fast and reliable hosting.
            </div>
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
            <a target="_blank" href="https://my-own-portfolio-alpha.vercel.app/" >Visit</a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="BuisnesCard" src="../images/MyPortfolio.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>Buisnes Card</h3>
            <div>
              My personal business card website, built with GatsbyJS and SCSS.
              Features: responsive design, contact details with
              copy-to-clipboard functionality, and custom styling without UI
              frameworks.
            </div>
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
            <a target="_blank"  href="https://b-card-mu.vercel.app/">Visit</a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="BuisnesCard" src="../images/bcard.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>Create Resume</h3>
            <div>
              The frontend is built with Next.js using TypeScript for type
              safety and SCSS for styling. It provides a responsive user
              interface where users can search for specialists by tags, create
              and manage their resumes, and upload photos.
              <br />
              The backend is built with NestJS and is responsible for
              authentication and data processing. JWT (JSON Web Tokens) are used
              for secure user registration and authentication. User data is
              stored in PostgreSQL, while uploaded images are stored and managed
              using Cloudinary.
            </div>
          </div>

          <div className="footer">
            <div className="technology">
              <h4>Technologies</h4>
              <div className="icon">
                <SiNextdotjs />
                <SiNestjs />
                <SiSass />
                <SiTypescript />
                <SiGraphql />
                <SiPostgresql />
                <SiCloudinary />
              </div>
            </div>
            <a target="_blank"  href="https://github.com/PancerMaksym/portfilio-service/">Visit</a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="ResumeIcon" src="../images/resume.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>Shopify Shop</h3>
            <div>
              The e-commerce platform is built with Next.js, using TypeScript
              for type safety and SCSS for styling. Product pages are stored in
              local state using Zustand.
              <br />
              With Storefront API and Admin API, users can register, add
              products to the cart, place orders, and pay via Stripe. PostgreSQL
              is used to link the cart to individual users, and order history is
              available for review.
            </div>
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
            <a target="_blank"  href="https://next-shopify-xi.vercel.app/">Visit</a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="ShopifyIcon" src="../images/store.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>Weather Site</h3>
            <div>
              A single-page application that retrieves and displays weather data
              for multiple cities using the OpenWeather API. The project
              features persistent storage of user-selected cities and weather
              information in LocalStorage, responsive design styled with SCSS,
              and an interactive map with markers providing real-time weather
              insights for each location.
            </div>
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
            <a target="_blank"  href="https://info-weather.vercel.app/">Visit</a>
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
