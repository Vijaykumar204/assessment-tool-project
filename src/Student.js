import React from "react";

import Educontent from "./Educontent";
import Stucard from "./Stucard";
import Carddemo from "./Carddemo";

import Footer from "./footer";

import Navbar from "./Navbar";
function Student(){
    return(
        <>
    
        <Navbar/>
        <Educontent/>
        <Stucard/>
        <Carddemo/>
        <Footer/>
     
    </>
    );
}
export default Student;
