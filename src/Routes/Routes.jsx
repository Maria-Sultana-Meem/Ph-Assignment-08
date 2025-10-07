import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component:Home,
        path:'/',
        
      },
      {
        path:'/apps',
        Component:Apps
      },
      {
        path:'/installation',
        Component:Installation
      }



    ]

    }



])
export default router