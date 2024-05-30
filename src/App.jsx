import HomePage from './pages/HomePage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/webzotica" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
