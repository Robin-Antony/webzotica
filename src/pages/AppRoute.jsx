import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage';
import Layout from '../components/Layout';
import {Route, Routes } from "react-router-dom";

function AppRoute() {
  return (
    <Routes>
        <Route path="/webzotica" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          
        </Route>
      </Routes>
  )
}

export default AppRoute
