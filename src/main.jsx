import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Components/Home/Home';
import HomePage from './assets/Components/HomePage/HomePage';
import Categories from './assets/Components/Categories/Categories';
import CItems from './assets/Components/CItems/CItems';
import Areas from './assets/Components/Areas/Areas';
import AreaItems from './assets/Components/AreaItems/AreaItems';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/category",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Categories></Categories>
      },
      {
        path: "/citems/:Citems",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.Citems}`),
        element: <CItems></CItems>
      },
      {
        path: "/areas",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),
        element: <Areas></Areas>
      },
      {
        path: "/areaitems/:areaName",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.areaName}`),
        element: <AreaItems></AreaItems>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
