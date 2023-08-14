import React from "react";
import Services from "../Pages/Services";
import Login from "../Pages/Login"; 
import Signup from "../Pages/Signup";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Doctor from "../Pages/Doctors/Doctor";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";

import {Routes,Route} from 'react-router-dom';


const Routers = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/doctors" element={<Doctor/>} />
            <Route path="/doctors/:id" element={<DoctorDetails/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
    )

 };

 export default Routers;