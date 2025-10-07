import React from 'react';
import { useLoaderData } from 'react-router';

const Installation = () => {
    const data= useLoaderData()
    console.log(data);
    
    return (
        <div className='py-10 space-y-5 bg-[#F5F5F5]'>
             <h1 className='text-4xl font-bold text-center'>Your Installed Apps</h1>
            <p className='text-center text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
        </div>
    );
};

export default Installation;