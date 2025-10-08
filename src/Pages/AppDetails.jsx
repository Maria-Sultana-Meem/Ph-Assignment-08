import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import starImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import Rechart from "./Rechart";
import { updateInstallList } from "../LocalStorage/LocalStorage";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const findData = data.find((d) => d.id === Number(id));
  const {
    image,
    title,
    reviews,
    ratingAvg,
    companyName,
    downloads,
   ratings,
    description,
    size,
  } = findData || {};
  const [install, setInstall] = useState(false);
  const handleClick = () => {

   setInstall(true)
   updateInstallList(findData)
   toast("Installed")

  };

  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex gap-10">
          <div>
            <img src={image} alt="" />
          </div>
          <div className="space-y-3 w-2/3">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p>
              Deployed by :
              <span className="text-[#632EE3] font-semibold">
                {companyName}
              </span>
            </p>
            <hr className="w-full text-gray-300" />
            <div className="flex gap-16 items-center">
              <div className="flex flex-col gap-2">
                <img className="w-[30px]" src={downloadImg} alt="" />
                <p>Downloads</p>
                <p className="text-3xl font-bold">{downloads}</p>
              </div>
              <div className="flex flex-col gap-2">
                <img className="w-[30px]" src={starImg} alt="" />
                <p>Average Ratings</p>
                <p className="text-3xl font-bold">{ratingAvg}</p>
              </div>
              <div className="flex flex-col gap-2">
                <img className="w-[30px]" src={reviewImg} alt="" />
                <p>Total Reviews</p>
                <p className="text-3xl font-bold">{reviews}</p>
              </div>
            </div>
            <button disabled={install} onClick={handleClick} className="btn bg-[#00D390]  px-4 text-white">
             {install?"Installed":`Install Now (${size})`}   
            </button>
          </div>
        </div>
        <hr className="text-gray-300 mt-5" />

        <div className="mt-10">
                  <h1 className="font-bold">Ratings</h1>
                <Rechart ratings={ratings}></Rechart>

             <hr className="text-gray-300 mt-5" />
             
        </div>

       <div>
        <h1 className="font-bold mt-10">Description</h1>
         <p className=" mt-5">{description}</p>
       </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    
  );
};

export default AppDetails;
