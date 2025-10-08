import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component:Home,
        loader:()=>fetch('/data.json'),
        path:'/',
        
      },
      {
        path:'/apps',
        loader:()=>fetch('/data.json'),
        Component:Apps
      },
      {
        path:'/installation',
        loader:()=>fetch('/data.json'),
        Component:Installation
      },
      {
        path:"/apps/:id",
         loader:()=>fetch('/data.json'),
        Component:AppDetails
      }



    ]

    }



])
export default router