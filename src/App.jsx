import HomePage from './pages/HomePage'
import './App.css'
import {BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
