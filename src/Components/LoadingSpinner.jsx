import { RingLoader } from "react-spinners";


const LoadingSpinner = () => {
    
    return (
        <div className='flex justify-center items-center h-screen'>
             <RingLoader color="#632EE3" loading={true} size={80}></RingLoader>

        </div>
    );
};

export default LoadingSpinner;