import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";
import appError from '../assets/App-Error.png'

const Apps = () => {
  const data = useLoaderData();
  const [search,setSearch] = useState('')
   const term = search.trim().toLocaleLowerCase()
   const searchedApp = term
   ? data.filter(d =>
        d.title.toLocaleLowerCase().includes(term)
      )
    : data

  return (
    <div className="bg-[#F5F5F5]">
        
      <div className="space-y-5 py-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Our All Applications</h1>
        <p className="text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">({searchedApp.length}) Apps Found</p>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
            </label>
          </div>
        </div>

        {
            searchedApp.length>0? <div className="gap-5 grid grid-cols-1 md:grid-cols-4">
          {searchedApp.map((appCardData) => (
            <AppCard key={appCardData.id} appCardData={appCardData}></AppCard>
          ))}
        </div>:  <div className="flex justify-center"> <img src={appError} alt="" /> </div>
        }
        
      </div>
        
    </div>
  );
};

export default Apps;
