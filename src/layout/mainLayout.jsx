import React from 'react';
import Header from "../component/HomePage/header";
import {Outlet} from "react-router";
import Footer from "../component/HomePage/footer";
import NewsLetter from "../component/HomePage/newsLetter";

function MainLayout(props) {
    return (
        <>
           <header>
               <Header/>
           </header>
            <Outlet/>
            <footer>
                <NewsLetter/>

                <Footer/>
            </footer>

        </>
    );
}

export default MainLayout;