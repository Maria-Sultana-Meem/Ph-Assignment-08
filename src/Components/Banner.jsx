import React from 'react';
import img1 from '../assets/googlePlay.png'
import img2 from '../assets/appStore.png'
import heroImg from '../assets/hero.png'
const Banner = () => {
    return (
        <>
        <div className='bg-[#F5F5F5]'>
            <div className='w-11/12  md:max-w-6xl mx-auto pt-16 space-y-5 '>
         
     <h1 className='text-5xl font-bold text-center'>We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</h1>
    <p className='text-center text-[#627382]'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
         <div className='flex justify-center items-center gap-5'>
            <a href='https://play.google.com' className='flex gap-2 hover:scale-110 hover:bg-white border border-gray-300 rounded-md py-1 px-4 items-center'>
                <img src={img1} alt="" />
                <span>Google Play</span>
            </a>
            <a href='https://www.apple.com/app-store/' className='flex hover:scale-110 hover:bg-white gap-2 border border-gray-300 rounded-md py-1 px-4 items-center'>
                <img src={img2} alt="" />
                <span>App Store</span>
            </a>
        
         </div>
         <div className='flex justify-center items-center'>
            <img src={heroImg} alt="" />
         </div>
       
       </div>
        </div>

       
        </>
    );
};

export default Banner;