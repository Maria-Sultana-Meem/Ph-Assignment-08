import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';

const MainLayout = () => {

    const navigation =useNavigation()
    if (navigation.state==="loading") {
        return <LoadingSpinner></LoadingSpinner>
        
    }
    return (
        <div>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>



        </div>
    );
};

export default MainLayout;