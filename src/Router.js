import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from 'cookie';
import Dashboard from "./containers/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Safety from "./components/Safety"
import GetInvolved from "./components/GetInvolved";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = (props) => {
  const { component : Component } = props;

  return checkAuth() === true ? <Component /> : <Navigate to="/login" />
}

const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getinvolved" element={<GetInvolved />}></Route>
        <Route path="/safety" element={<Safety />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />}></Route>
        
      </Routes>
    );
  };
  
  export default Router;