import React from 'react';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({appCardData}) => {
    const {image,title,downloads,ratingAvg,id} = appCardData
    
    return (
        <Link to={`/appDetails/${id}`}>
        <div>
         <div className="card bg-base-100  shadow-sm hover:scale-105 transition ease-in-out">
          <figure className='p-4 '>
            <img className='h-[200px] w-full rounded-md'
              src={image}
              alt="Apps" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-between">
              <button className="btn text-[#00D390]"><img className='w-[20px]' src={downloadImg} alt="" />{downloads}</button>
              <button className="btn text-[#FF8811] bg-[#FFF0E1]"><img className='w-[20px]' src={ratingImg} alt="" />{ratingAvg}</button>
            </div>
          </div>
        </div>
         </div>
        </Link>
    );
};

export default AppCard;