import React from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/home"
import Footer from "./components/footer/Footer";
import Products from "./pages/products/products";
import Product from "./pages/product/product";
import Message from "./pages/message/message";
import Register from "./pages/register/register"
import Messages from "./pages/messages/messages";
import MyProduct from "./pages/myProduct/myProduct";
import Login from "./pages/login/login"
import Orders from "./pages/orders/orders";
import Add from "./pages/add/Add";
import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

const Layout = ()=>{
  return(
    <div className="app">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
      path:"/",
      element:<Home/>
      },
      {
        path:"/products",
        element: <Products/>
      },
      {
        path:"/product/:id",
        element: <Product/>
      },
      {
        path:"/orders",
        element: <Orders/>
      },
      {
        path:"/messages",
        element: <Messages/>
      },
      {
        path:"/message/:id",
        element: <Message/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/myproduct",
        element: <MyProduct/>
      },
      {
        path:"/add",
        element: <Add/>
      }
    ]
  }
])


  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
