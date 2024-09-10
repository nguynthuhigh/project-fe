import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./admin/pages/home/dashboard"
import Login from "./admin/pages/authentication/login"
import ManageUser from "./admin/pages/manage-user/manage-user"
function App() {
  const router =  createBrowserRouter([{
    path:'/',
    children:[
      {
        path:'dashboard', 
        element:<Login></Login>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'manage-user',
        element:<ManageUser></ManageUser>
      }
    ]
  }])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
