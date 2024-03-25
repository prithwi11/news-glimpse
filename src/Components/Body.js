import React from 'react'
import Home from './Home/Home'
import NewsCategory from './NewsCategory'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsDetails from './Home/NewsDetails'

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
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body