import React from 'react';
import Banner from '../Components/Banner';
import Reviews from '../Components/Reviews';
import { useLoaderData } from 'react-router';
import HomeCard from './HomeCard';


const Home = () => {
    const data = useLoaderData()
    const showData = data.slice(0,8)
    
    
    return (
        <div>
        
            <Banner></Banner>
           <Reviews></Reviews>
           <div className=' py-10 bg-[#F5F5F5] space-y-5 '>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='max-w-6xl mx-auto gap-5 grid grid-cols-1 md:grid-cols-4'>
                {
                showData.map(appData=><HomeCard key={appData.id} appData={appData}></HomeCard>)
            }
            </div>
           </div>
        </div>
    );
};

export default Home;