import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
 {
    path: '/',
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading...</p>,
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
      }



    ]

    }



])
export default router