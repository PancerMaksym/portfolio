import React, { useRef, useState } from "react"
import "../style/contact.scss"
import { SiGithub, SiTelegram, SiGmail } from "react-icons/si"
import { FiCopy, FiCheck } from "react-icons/fi"
import emailjs from "@emailjs/browser"

const ContactItem = ({
  icon: Icon,
  text,
  name,
}: {
  icon: any
  text: string
  name: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Не вдалося скопіювати:", err)
    }
  }

  return (
    <div className="item">
      <Icon className={`icon ${name}`} />
      <div>{text}</div>
      <button onClick={handleCopy} disabled={copied}>
        {copied ? <FiCheck className="check" /> : <FiCopy className="copy" />}
      </button>
    </div>
  )
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    const formData = new FormData(form.current)
    const data = {
      user_email: formData.get("user_email"),
      title: formData.get("title"),
      message: formData.get("message"),
    }
    console.log("af: ", process.env.GATSBY_PUBLIC_KEY)
    emailjs
      .send(
        `${process.env.GATSBY_SERVICE_ID!}`,
        `${process.env.GATSBY_TEMPLATE_ID!}`,
        data,
        `${process.env.GATSBY_PUBLIC_KEY!}`
      )
      .then(
        () => {
          console.log("SUCCESS!")
        },
        error => {
          console.log("FAILED...", error.text)
        }
      )
  }

  return (
    <div className="page" id="contact">
      <div className="data">
        <h2>My contacts</h2>
        <div className="variants">
          <ContactItem
            icon={SiGmail}
            text="pantsyr.maksym@gmail.com"
            name="gmail"
          />
          <ContactItem
            icon={SiTelegram}
            text="+38(095) 328 3683"
            name="telegram"
          />
          <ContactItem icon={SiGithub} text="PancerMaksym" name="github" />
        </div>
      </div>
      <div className="form">
        <h3>Send a message</h3>
        <form id="myForm" ref={form} onSubmit={sendEmail}>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div>
            <label>Title</label>
            <input type="text" name="title" id="title" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" id="message" required />
          </div>
        </form>
        <button type="submit" form="myForm">Send</button>
      </div>
    </div>
  )
}

export default Contact
