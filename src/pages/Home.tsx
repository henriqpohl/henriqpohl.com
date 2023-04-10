import logoImg from "../assets/logo.svg"

import { FaWhatsapp } from "react-icons/fa"

import { VscHeart } from "react-icons/vsc"
import { MdAlternateEmail } from "react-icons/md"
import { RiBehanceFill, RiLinkedinFill } from "react-icons/ri"

import { useState } from "react"

import "./Home.scss"
import { Notification } from "../components/notification/Notification"
import { LessIsMore } from "../components/less-is-more/Less-is-more"

export function Home() {
  
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const personalInformationStatus = isClicked
    ? "personal-information-clicked"
    : ""

  const lessIsMoreStatus = isClicked ? "less-is-more-clicked" : ""

  return (
    <main>
      <header className="sticky z-50 w-full p-8">
        <div className="flex items-center justify-between">
          <img src={logoImg} width={50} alt="" className="logo"></img>

          <Notification />

          <LessIsMore click={handleClick} />
        </div>
      </header>

      {/* <div
        className={`personal-information ${personalInformationStatus} max-w-[1120px] mx-auto px-8 pt-8 text-center`}
      ></div> */}

      <div
        className={`personal-information ${personalInformationStatus} max-w-[1120px] mx-auto px-8 pt-8 text-center`}
      >
        <section>
          <h1 className="text-[color:var(--black)] mt-2 text-4xl font-normal">
            Greetings! <span className="font-semibold">I'm Henrique,</span>
          </h1>
          <h2 className="text-[color:var(--black)] text-5xl font-semibold leading-relaxed">
            a Web Developer & Designer
          </h2>
          <h3 className="text-[color:var(--black)] mt-16 leading-relaxed text-center text-3xl font-normal">
            I believe that the <span className="font-semibold">Web</span> and{" "}
            <span className="font-semibold">Design</span> unites different
            universes and brings us a fantastic way of communication!{" "}
            <span className="font-semibold">:)</span>
          </h3>
        </section>

        <section className="mt-16">
          <ul className="flex-row flex-wrap gap-10 text-lg cursor-pointer text-baseflex">
            <li>
              <a href="mailto:henriqpohl@gmail.com" target="_blank">
                <MdAlternateEmail className="social-icon" />
                E-mail
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/353833998859?text=Ola%20venho%20atraves%20do%20seu%20cartao%20digital!"
                target="_blank"
                rel="noopener"
              >
                <FaWhatsapp className="social-icon" />
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/henriqpohl/"
                target="_blank"
                rel="noopener"
              >
                <RiLinkedinFill className="social-icon" />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.behance.net/henriqpohl"
                target="_blank"
                rel="noopener"
              >
                <RiBehanceFill className="social-icon" />
                Behance
              </a>
            </li>
          </ul>
        </section>

        <section className="flex justify-center mt-24 mb-10">
          <VscHeart className="text-[color:var(--black)] text-6xl heart" />
        </section>
      </div>

      <div
        className={`less-is-more ${lessIsMoreStatus} max-w-[1120px] p-8 absolute -z-10 top-4 mt-14 m-auto left-0 right-0 opacity-30 text-center blur-sm text-white min-h-fit text-4xl leading-relaxed 2xl:text-5xl 2xl:leading-relaxed`}
      >
        <p className="font-semibold">Less is More!</p>
        <p>
          So, believing that the Web and Design unites different universes and
          brings us a fantastic way of communication, through drawings, forms
          and objects, it provides us a massive immersion to expose our goals,
          making our ideas innovative. It brings people together, teaching them
          to think like you, <span className="font-semibold">right? :)</span>
        </p>
      </div>
    </main>
  )
}