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
            <h3>IoT Service</h3>
            <div>
              Built a distributed IoT system for real-time audio data
              collection, streaming, and anomaly detection. Built on a
              microservices architecture using Nx, NestJS and Next.js. Designed
              communication layer using TCP, HTTP and WebSocket protocols.
              Integrated ESP32-S3 devices for data acquisition. Implemented
              real-time audio streaming and signal processing pipeline. Added
              anomaly detection using TensorFlow.js (YAMNet). Developed event
              storage and a web-based monitoring interface.
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
            <a
              target="_blank"
              href="https://github.com/PancerMaksym/iot-monorepo/"
            >
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
              SCSS. Built a fully responsive and scalable UI with custom
              components with custom UI components, smooth navigation, and
              optimized performance. Deployed on Vercel for production hosting.
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
            <a
              target="_blank"
              href="https://my-own-portfolio-alpha.vercel.app/"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="BuisnesCard" src="../images/MyPortfolio.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>Business Card</h3>
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
            <a target="_blank" href="https://b-card-mu.vercel.app/">
              Visit
            </a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="BuisnesCard" src="../images/bcard.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>ResumeHub</h3>
            <div>
              Built a full-stack application using Next.js and NestJS.
              Implemented JWT-based authentication and user management system.
              Designed REST API for resume creation and search functionality.
              Integrated Cloudinary for image storage. Used PostgreSQL for
              structured data storage.
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
            <a
              target="_blank"
              href="https://github.com/PancerMaksym/portfilio-service/"
            >
              Visit
            </a>
          </div>
        </div>
        <div className="image">
          <StaticImage alt="ResumeIcon" src="../images/resume.png" />
        </div>
      </div>
      <div className="project">
        <div className="info">
          <div className="text">
            <h3>E-commerce Shop</h3>
            <div>
              The e-commerce platform is built with Next.js, using TypeScript
              for type safety and SCSS for styling. Managed product state using
              Zustand.
              <br />
              Integrated Shopify Storefront and Admin APIs for product and order
              management. PostgreSQL is used to link the cart to individual
              users, and order history is available for review.
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
            <a target="_blank" href="https://next-shopify-xi.vercel.app/">
              Visit
            </a>
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
              Built a single-page weather application using OpenWeather API. The
              project features persistent storage of user-selected cities and
              weather information in LocalStorage, responsive design styled with
              SCSS, and an interactive map with markers providing real-time
              weather insights for each location.
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
            <a target="_blank" href="https://info-weather.vercel.app/">
              Visit
            </a>
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
