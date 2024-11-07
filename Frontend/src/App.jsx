import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from "./components/Home"
import LoginPage from "./components/Login"
import SignUpPage from "./components/SignUp"
import BroadcastPage from "./components/Broadcast"
import ExplorePage from "./components/Explore"
import Marketplace from "./components/Marketplace"



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><HomePage /></>
    },
    {
      path: '/login',
      element: <><LoginPage /></>
    },
    {
      path: '/signUp',
      element: <><SignUpPage /></>
    },
    {
      path: '/explore',
      element: <><ExplorePage /></>
    },
    {
      path: '/broadcast',
      element: <><BroadcastPage /></>
    },
    {
      path: '/marketplace',
      element: <><Marketplace /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
