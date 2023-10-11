import React from 'react';
import Navber from '../pages/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

function Main(props) {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;