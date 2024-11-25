import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'

import Profile from '../Pages/Profile'
import Table from '../Pages/Table'
import Notifications from '../Pages/Notifications'

const router = createBrowserRouter(

  [
    {
        path: "/",
        element: <App />,
        children: [
            {
                name: Home,
                path: "/",
                element: <Home />
            },
            {
                name: Profile,
                path: "/profile",
                element: <Profile />
            },
            {
                name: Table,
                path: "/table",
                element:<Table />
            },
            {
                name: Notifications,
                path: "/notifications",
                element:<Notifications />
            }
        ]
    }

],
{
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  })

export default router