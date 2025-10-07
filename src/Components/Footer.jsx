import React from 'react';
import logoImg from '../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
            <footer className="footer sm:footer-horizontal max-w-6xl mx-auto  text-base-content py-10">
  <aside>
   <img className='w-[80px]' src={logoImg} alt="" />
    <p className='text-white font-bold text-2xl'>
      HERO.IO
      <br />
      We Build
Productive Apps
    </p>
  </aside>
  <nav className='text-white'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='text-white'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;