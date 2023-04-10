import "./Less-is-more.scss"

import { HiOutlineCursorClick } from "react-icons/hi"

import "./Less-is-more.scss"

interface LessIsMoreProps {
  click: () => void
}

export function LessIsMore({ click }: LessIsMoreProps) {
  return (
    <HiOutlineCursorClick
      className="click-less-is-more cursor-pointer w-8 h-8 mr-2 text-[color:var(--black)] duration-300 hover:brightness-200"
      onClick={click}
    />
  )
}
