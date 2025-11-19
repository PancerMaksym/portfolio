import React, { useEffect, useRef, useState } from "react"
import "../style/contact.scss"
import { SiGithub, SiTelegram, SiGmail } from "react-icons/si"
import { FiCopy, FiCheck } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import { Bounce, ToastContainer, toast } from "react-toastify"
import { IconType } from "react-icons"

const ContactItem = ({
  Icon,
  text,
  name,
}: {
  Icon: IconType
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.GATSBY_PUBLIC_KEY!)
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current || loading) return

    setLoading(true)

    const data = {
      user_email: (
        form.current.elements.namedItem("user_email") as HTMLInputElement
      ).value,
      title: (form.current.elements.namedItem("title") as HTMLInputElement)
        .value,
      message: (
        form.current.elements.namedItem("message") as HTMLTextAreaElement
      ).value,
    }

    emailjs
      .send(
        process.env.GATSBY_SERVICE_ID!,
        process.env.GATSBY_TEMPLATE_ID!,
        data
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        })

        form.current?.reset()
      })
      .catch(() => {
        toast.error("Failed to send message!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          transition: Bounce,
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="page" id="contact">
      <ToastContainer />

      <div className="data">
        <h2>My contacts</h2>
        <div className="variants">
          <ContactItem
            Icon={SiGmail}
            text="pantsyr.maksym@gmail.com"
            name="gmail"
          />
          <ContactItem
            Icon={SiTelegram}
            text="+38(095) 328 3683"
            name="telegram"
          />
          <ContactItem Icon={SiGithub} text="PancerMaksym" name="github" />
        </div>
      </div>

      <div className="form">
        <h3>Send a message</h3>
        <form id="myForm" ref={form} onSubmit={sendEmail}>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div>
            <label>Title</label>
            <input type="text" name="title" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" required />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
