import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation} from 'react-router';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {

    const navigation = useNavigation()
    return (
        <div>
           <Navbar></Navbar> 
           <div>
            {
                navigation.state==="loading" && <LoadingSpinner/>
            }
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
    <ToastContainer></ToastContainer>


        </div>
    );
};

export default MainLayout;