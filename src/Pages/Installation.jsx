import React, { useState } from "react";
// import { useLoaderData } from "react-router";
import { loadInstallList } from "../LocalStorage/LocalStorage";
import InstallCard from "./InstallCard";

const Installation = () => {
//   const data = useLoaderData();
  const [installData, setInstallData] = useState(() => loadInstallList());
   const [sort,setSort] = useState('none')
    
  const sortedItem = (() => {
    if (sort === 'size-asc') {
      return [...installData].sort((a, b) =>parseFloat( a.size) - parseFloat(b.size))
    } else if (sort === 'size-desc') {
      return [...installData].sort((a, b) =>parseFloat( b.size) - parseFloat(a.size))
    } else {
      return installData
    }
  })()
 
  if (!installData.length)
    return (
      <p className="text-center py-10 font-bold text-3xl">No App Available</p>
    );

  return (
    <div className="py-10 space-y-5 bg-[#F5F5F5]">
      <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
      <p className="text-center text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1>{sortedItem.length} Apps Found</h1>
        <div>
           <label className='form-control w-full max-w-xs'>
          <select
            className='select select-bordered'
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value='none'>Sort by Size</option>
            <option value='size-asc'>Low-to-High</option>
            <option value='size-desc'>High-to-Low</option>
          </select>
        </label>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        {sortedItem.map((installCardData) => (
          <InstallCard
            key={installCardData.id}
            installCardData={installCardData}
            setInstallData={setInstallData}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
