import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>

        </>
    );
}

export default Layout;
