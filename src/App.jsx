
import './App.css'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
         {
            path:'/',
            element:<Home/>
         },
         {
          path:'/about',
          element:<About />
         }, {
          path:'/user/:name',
          element:<User />
         }
  ])
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
