import HomePage from './pages/HomePage'
import './App.css'
import {BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          <Route path='services' element={<ServicesPage/>}></Route>
          <Route path='contact' element={<ContactPage/>}></Route>
          
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
