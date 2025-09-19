import React from "react"
import "../style/skills.scss"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiGatsby,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiSass,
  SiVercel,
  SiFigma,
  SiGithub,
  SiPostman,
  SiShopify,
} from "react-icons/si"

const Skills = () => {
  return (
    <div className="page" id="skills">
      <section className="language">
        <h3>Language</h3>
        <div className="variants">
          <div>Ukrainian - Naitive</div>
          <div>English - Intermidiate</div>
        </div>
      </section>
      <section className="soft-skill">
        <h3>Soft Skills</h3>
        <div className="multiples">
          <div className="variants">
            <div>Problem-Solving</div>
            <div>Adaptability</div>
            <div>Creativity</div>
            <div>Time Management</div>
          </div>
          <div className="variants">
            <div>Attention to Details</div>
            <div>Self-Motivation</div>
            <div>Communication</div>
            <div>Responsibility</div>
          </div>
        </div>
      </section>
      <section className="technical-skill">
        <h3>Technical skill</h3>
        <div className="variants">
          <div className="tech-item">
            <SiHtml5 className="icon html" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <SiCss3 className="icon css" />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <SiJavascript className="icon js" />
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <SiTypescript className="icon ts" />
            <span>TypeScript</span>
          </div>
          <div className="tech-item">
            <SiGraphql className="icon graphql" />
            <span>GraphQL</span>
          </div>
          <div className="tech-item">
            <SiReact className="icon react" />
            <span>React</span>
          </div>
          <div className="tech-item">
            <SiGatsby className="icon gatsby" />
            <span>Gatsby</span>
          </div>
          <div className="tech-item">
            <SiNextdotjs className="icon next" />
            <span>Next.js</span>
          </div>
          <div className="tech-item">
            <SiMongodb className="icon mongo" />
            <span>MongoDB</span>
          </div>
          <div className="tech-item">
            <SiPostgresql className="icon postgres" />
            <span>PostgreSQL</span>
          </div>
          <div className="tech-item">
            <SiSass className="icon scss" />
            <span>SCSS</span>
          </div>
          <div className="tool-item">
            <SiShopify className="icon shopify" />
            <span>Shopify</span>
          </div>
        </div>
      </section>
      <section className="tools">
        <h3>Tools</h3>
        <div className="variants">
          <div className="tool-item">
            <SiVercel className="icon vercel" />
            <span>Vercel</span>
          </div>
          <div className="tool-item">
            <SiFigma className="icon figma" />
            <span>Figma</span>
          </div>
          <div className="tool-item">
            <SiGithub className="icon github" />
            <span>GitHub</span>
          </div>
          <div className="tool-item">
            <SiPostman className="icon postman" />
            <span>Postman</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
