import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Feature from './pages/Feature'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'




const App =()=> {
  return (
    <>
    <Navbar/>

    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/feature' element={<Feature/>}></Route>
       <Route path='/log' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        
    </Routes>
    
    <Footer/> 
   
    </>
  )
}

export default App