// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './component/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Error from './component/Error';
import Brands from './component/brands';
import Login from './component/Login';
import Registration from './component/Registration';
import Authprobider from './component/Autnprobider/Authprobider';
import MyProfile from './component/MyProfile';


function App() {




  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Brands", element: <Brands/> },
    { path: "/Login", element: <Login/> },
    { path: "/Registration", element: <Registration/> },
    { path: "/MyProfile", element: <MyProfile/> },
    { path: "*", element: <Error/> },
    
  ]);


  return (
    <>
    <Authprobider>
    <RouterProvider router={router} />
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition: Bounce
    />
    </Authprobider>
    </>
  )
}

export default App



