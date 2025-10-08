import React from 'react';

const Reviews = () => {
    return (
        <div>
             <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 '>
         <h1 className='text-4xl text-white text-center'>Trusted by Millions, Built for You</h1>

         <div className='md:flex justify-center items-center gap-20 mt-8'>
          <div className='gap-3 flex flex-col justify-center items-center'>
         <p className='text-white'>Total Downloads</p>
         <h1 className='font-extrabold text-white text-4xl'>29.6M</h1>
         <p className='text-white'>21% more than last month</p>

          </div>
          <div className='gap-3 flex flex-col justify-center items-center'>
         <p className='text-white'>Total Reviews</p>
         <h1 className='font-extrabold text-white text-4xl'>906K</h1>
         <p className='text-white'>46% more than last month</p>

          </div>
          <div className='gap-3 flex flex-col justify-center items-center'>
         <p className='text-white'>Active Apps</p>
         <h1 className='font-extrabold text-white text-4xl'>132+</h1>
         <p className='text-white'>31 more will Launch</p>

          </div>


         </div>

        </div>
        </div>
    );
};

export default Reviews;