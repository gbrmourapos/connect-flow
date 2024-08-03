import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/login/login";
import Register from './pages/register/register'
import Resetpass from "./pages/resetpass/resetpass";
import Dashboard from './pages/dashboard/dashboard'


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/login" exact />
           <Route component = { Dashboard }  path="/home" exact />
           <Route component = { Register} path="registrar" exact/>
           <Route component = { Resetpass } path="esqueciasenha" exact/>
       </BrowserRouter>
   )
}

export default Routes;