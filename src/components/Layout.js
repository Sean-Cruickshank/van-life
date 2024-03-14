import { Outlet, NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import SocialNav from './SocialNav';
import Footer from './Footer';

export default function Layout() {
  
  const submessage = [
    "Hello World!",
    "Why do I have to be the sub message?",
    "Third option"
  ]

  const submessageSelector = Math.floor(Math.random() * submessage.length);

  return (
    <div className='layout'>
      <div className='layout-banner'>
        <h1>HELLO!</h1>
        <h2>{submessage[submessageSelector]}</h2>
      </div>
      
      <SocialNav />

      <Navbar />

      <div className='layout-outlet'>
        <Outlet />
      </div>
      
      <Footer />

    </div>
    
  )
}