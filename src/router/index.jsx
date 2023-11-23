import { createBrowserRouter, redirect } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import DashBoard from '../pages/Dashboard'
import About from '../pages/About'
import AdminPage from '../pages/AdminPage'
import Root from '../layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <Root />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/"); //If the user isn't logged in, we redirect to the login page.
      } else {
        return null;
      }
    },
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
        loader: () => {
          if (localStorage.getItem('role') !== 'admin') {
            return redirect('/')
          } else {
            return null
          }
        }
      }
    ],
  },
]);

export default router