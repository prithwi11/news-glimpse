import React from 'react'
import Home from './Home/Home'
import NewsCategory from './NewsCategory'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsDetails from './Home/NewsDetails'
import SearchNews from './SearchNews'
import Login from './User/Login'
import Signup from './User/Signup'
import Weather from './Weather/Home'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/category/:categoryIdentifier",
      element : <NewsCategory />
    },
    {
      path : "/news-details",
      element : <NewsDetails />
    },
    {
      path : "/search-news/:searchText",
      element : <SearchNews />
    }, 
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/signup",
      element : <Signup />
    },
    {
      path : "/weather",
      element : <Weather />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body