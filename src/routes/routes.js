import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import Login from "../pages/login/login";
import Register from '../pages/register/register'
import Resetpass from "../pages/resetpass/resetpass";
import Dashboard from '../pages/dashboard/dashboard'


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/registrar",
        element: <Register/>
    },
    {
        path:"/esqueciasenha",
        element: <Resetpass/>
    },
    {
        path:"/home",
        element: <Dashboard/>
    }
])

export default router;