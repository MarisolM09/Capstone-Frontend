import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Safety from "./components/Safety"
import GetInvolved from "./components/GetInvolved";


const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getinvolved" element={<GetInvolved />}></Route>
        <Route path="/safety" element={<Safety />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    );
  };
  
  export default Router;