import "./navbar.css"
import React from 'react'
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import Button from "../buttons/Button"
import { BiChevronDown } from "react-icons/bi"
import { FaPlus } from "react-icons/fa6";

const BlueNavbar = () => {
  return (
    <>
      <div className="main_blue_div">
        <div className="blue_div">
          <div className="upper_span">
            <Button text={<span className="hot_btn">HOT</span>} />
            <span className="free_div">Free Express Shipping</span>
          </div>
          <div className="icons">
            <Button className="DE_button" text={<span className="flex items-center">EN <BiChevronDown /></span>} />
            <div className="three_icons">
              <AiOutlineTwitter />
              <AiFillFacebook />
              <AiOutlineInstagram />
            </div>
          </div>
          <div className="media_button">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlueNavbar
