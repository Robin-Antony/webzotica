import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'

function Layout() {
  return (
    <>
        <HeaderComponent/>
        <Outlet/>
        <FooterComponent/>
      
    </>
  )
}

export default Layout