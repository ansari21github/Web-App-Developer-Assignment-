import React from 'react'
import Header from '../components/Header'
import { LuFigma } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Footer from '../components/Footer';
import CardLayout3 from '../components/CardLayout3';
import CardLayout2 from '../components/CardLayout2';
import CardLayout1 from '../components/CardLayout1';
import Display2 from '../components/Display2';
import Display1 from '../components/Display1';
function Home() {
  return (
    <>
    <Header/>
   <Display1/>
      <Display2/>
<CardLayout1/>
<CardLayout2/>
<CardLayout3/>
   <Footer/>
    </>
  )
}

export default Home
