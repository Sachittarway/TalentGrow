import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Landing from "./Pages/landing";



export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/landing" element={<Landing/>} />
   
    </Routes>
  );
}
