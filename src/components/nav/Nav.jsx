import React from 'react'
import './nav.css'
import { FiHome } from 'react-icons/fi'
import { BiSolidContact,BiSolidBookAlt } from 'react-icons/bi'
import {RiServiceFill } from 'react-icons/ri'
import { useState } from "react";

import { FaUserAlt } from 'react-icons/fa'



function Nav() {
  const  [activeNav, setActiveNav] = useState('#')
  return (


    <nav>
      <a href='#' onClick={() =>setActiveNav('#')}className={activeNav === '#' ? "active":''}><FiHome/></a>
      <a href='#about' onClick={() =>setActiveNav('#about')}className={activeNav === '#about' ? "active":''}><FaUserAlt/></a>
      <a href='#experience' onClick={() =>setActiveNav('#experience')}className={activeNav === '#experience' ? "active":''}><BiSolidBookAlt/></a>
      <a href='#services' onClick={() =>setActiveNav('#services')}className={activeNav === '#services' ? "active":''}><RiServiceFill/></a>
      <a href='#contact' onClick={() =>setActiveNav('#contact')}className={activeNav === '#contact' ? "active":''}><BiSolidContact/></a>
     



    </nav>
  )
}

export default Nav