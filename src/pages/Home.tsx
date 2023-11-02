import logoImg from "../assets/logo.svg"

import { FaWhatsapp } from "react-icons/fa"

import { VscHeart } from "react-icons/vsc"
import { MdAlternateEmail } from "react-icons/md"
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri"

import { useState } from "react"

import "./Home.scss"
import { Notification } from "../components/notification/Notification"
import { LessIsMore } from "../components/less-is-more/Less-is-more"

export function Home() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const personalInformationStatus = "personal-information-clicked"
  const lessIsMoreStatus = "less-is-more-clicked"

  return (
    <main>
      <header className="sticky z-50 w-full p-8">
        <div className="flex items-center justify-between">
          <img
            src={logoImg}
            width={50}
            alt=""
            className="transition duration-500 ease-in-out cursor-pointer hover:rotate-360"
          ></img>

          <Notification />

          <LessIsMore click={handleClick} />
        </div>
      </header>

      <div
        className={`personal-information ${
          isClicked && personalInformationStatus
        } max-w-[1120px] mx-auto px-8 pt-8 text-center`}
      >
        <section>
          <h1 className="text-[color:var(--black)] mt-2 text-4xl font-normal leading-normal">
            <span className="flex justify-center gap-2 text-3xl">
              Hi there!<div className="hand-tilt-shaking">👋</div>
            </span>
            <span className="font-semibold">I'm Henrique,</span>
          </h1>
          <h2 className="text-[color:var(--black)] text-5xl mt-8 sm:mt-4 font-semibold leading-normal">
            a Front End Engineer!
          </h2>
          <h3 className="text-[color:var(--black)] mt-16 leading-relaxed text-center text-3xl font-normal">
            I believe that the <span className="font-semibold">Web</span> and{" "}
            <span className="font-semibold">Design</span> unites different
            universes and brings us a fantastic way of communication!{" "}
            <span className="font-semibold">:)</span>
          </h3>
        </section>

        <section className="mt-16">
          <ul className="flex flex-row flex-wrap justify-center gap-10 text-lg cursor-pointer">
            <li>
              <a
                href="mailto:henriqpohl@gmail.com"
                target="_blank"
                className="flex items-center"
              >
                <MdAlternateEmail className="w-7 h-7 mr-2 text-[color:var(--black)]" />
                E-mail
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/353833998859?text=Ola%20venho%20atraves%20do%20seu%20cartao%20digital!"
                target="_blank"
                rel="noopener"
                className="flex items-center"
              >
                <FaWhatsapp className="w-7 h-7 mr-2 text-[color:var(--black)]" />
                WhatsApp
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/henriqpohl/"
                target="_blank"
                rel="noopener"
                className="flex items-center"
              >
                <RiLinkedinFill className="w-7 h-7 mr-2 text-[color:var(--black)]" />
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/henriqpohl"
                target="_blank"
                rel="noopener"
                className="flex items-center"
              >
                <RiGithubFill className="w-7 h-7 mr-2 text-[color:var(--black)]" />
                GitHub
              </a>
            </li>
          </ul>
        </section>

        <section className="flex justify-center mt-24 mb-10">
          <VscHeart className="text-[color:var(--black)] text-6xl heart" />
        </section>
      </div>

      <div
        onClick={handleClick}
        className={`w-full h-full less-is-more  ${
          isClicked && lessIsMoreStatus
        } p-8 absolute -z-10 top-0 left-0 right-0 opacity-30 blur-sm`}
      >
        <div className="max-w-[1120px] text-center mt-12 pt-12 pb-12 m-auto relative text-white text-4xl sm:text-4xl sm:leading-loose leading-normal">
          <p className="font-semibold">Less is More!</p>
          <p>
            So, believing that the Web and Design unites different universes and
            brings us a fantastic way of communication, through drawings, forms
            and objects, it provides us a massive immersion to expose our goals,
            making our ideas innovative. It brings people together, teaching
            them to think like you,{" "}
            <span className="font-semibold">right? :)</span>
          </p>
        </div>
      </div>
    </main>
  )
}