import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"


const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/pizzalisting" element={<PizzaListing />}></Route>
        <Route path="/coffeelisting" element={<CoffeeListing />}></Route>
        <Route path="/addlisting" element={<AddListing />}></Route> */}
      </Routes>
    );
  };
  
  export default Router;