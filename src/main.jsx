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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('data.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/regi",
        element:<Register></Register>
      },
      {
        path:"/booked",
        element:<Booked></Booked>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
 
)
