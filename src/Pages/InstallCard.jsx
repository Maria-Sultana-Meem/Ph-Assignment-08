
import { toast } from 'react-toastify';
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'

import { removeFromInstallList } from '../LocalStorage/LocalStorage';

const InstallCard = ({installCardData,setInstallData}) => {
    const {image,title,ratingAvg,size,downloads,id} = installCardData
   
   const handleUninstall=()=>{
        removeFromInstallList(id)
        setInstallData(prev => prev.filter(p => p.id !== id))
        toast("Uninstalled")
        
    }
    return (
        <div className='p-6 rounded-md flex justify-between mt-3 items-center bg-white'>
            <div className='flex items-center gap-5'>
            <img className='h-[150px] w-[200px]' src={image} alt="" />
            <div>
          <h1 className='font-bold text-2xl'>{title}</h1>
           <div className='flex items-center gap-10 mt-5'>
             <div className='flex items-center gap-3'>
                <div><img src={downloadImg} alt="" /></div>
                <h1>{downloads}</h1>
             </div>
             
             <div className='flex items-center gap-3'>
                <img src={ratingImg} alt="" />
                <h1>{ratingAvg}</h1>
             </div>
             <div>
                <p>{size}</p>
             </div>

           </div>

            </div>



            </div>
            <button onClick={handleUninstall} className="btn bg-[#00D390] hover:scale-110  px-4 text-white">Uninstall</button>
      
        </div>
    );
};

export default InstallCard;