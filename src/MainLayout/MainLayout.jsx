import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation} from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {

    const navigation = useNavigation()
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
 const timer =setTimeout(()=>setLoading(false),5000)
 return ()=>clearTimeout(timer)

  },[])

useEffect(()=>{
if (navigation.state==="loading") {
    setLoading(true)
  }
  else{
    const timer =setTimeout(()=>setLoading(false),300)
 return ()=>clearTimeout(timer)
  }

},[navigation.state])

if (loading) {
    return <LoadingSpinner></LoadingSpinner>
}
  
    return (
        <div>
           <Navbar></Navbar> 
           <div>
            {/* {
                navigation.state==="loading" && <LoadingSpinner/>
            } */}
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
    <ToastContainer position='top-center'></ToastContainer>


        </div>
    );
};

export default MainLayout;