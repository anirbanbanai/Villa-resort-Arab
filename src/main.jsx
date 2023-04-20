import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/Component/Main';
import Home from './assets/Component/Home';
import Login from './assets/Component/Login';
import Register from './assets/Component/Register';
import Booked from './assets/Component/Booked';
import AuthProvider from './assets/Component/AuthProvider';
import PrivetRoute from './assets/Component/PrivetRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/regi",
        element: <Register></Register>
      },
      {
        path: "/booked",
        element: <PrivetRoute><Booked></Booked></PrivetRoute>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
