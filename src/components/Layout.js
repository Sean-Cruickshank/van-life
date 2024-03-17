import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import SocialNav from './SocialNav';
import Footer from './Footer';

export default function Layout() {
  
  const submessage = [
    "Hello World!",
    "Why do I have to be the sub message?",
    "Welcome to my website!",
    "Under Construction!",
    "Operating at partial capacity since 2024!",
    "const subtitle = {message}!"
  ]

  const submessageSelector = Math.floor(Math.random() * submessage.length);

  const [aboutLink, setAboutLink] = React.useState()
  const location = useLocation();
  const splitter = location.pathname.split("/");
  if (splitter[1] === "about") {
    if (aboutLink !== splitter[2]) {
      setAboutLink(splitter[2])
    }
    
  }

  return (
    <div className='layout'>
      <div className='layout-banner'>
        <h1>WELCOME!</h1>
        <h2>{submessage[submessageSelector]}</h2>
      </div>
      
      <SocialNav />

      <Navbar aboutLink={aboutLink} />

      <div className='layout-outlet'>
        <Outlet />
      </div>
      
      <Footer />

    </div>
    
  )
}