import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Routers from "../routes/Routers"

const Layout = () =>{
return(
<div>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
</div>
)};

 export default Layout;