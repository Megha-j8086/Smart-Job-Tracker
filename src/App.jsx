import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Feature from './pages/Feature'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import TrackJob from './pages/TrackJob'




const App =()=> {
      const [registeredUser, setRegisteredUser] = useState(null);

  return (
    <>
    <Navbar/>

    <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='register' element={<Register setRegisteredUser={setRegisteredUser}/>}></Route>
       <Route path='/feature' element={<Feature/>}></Route>
       <Route path='/log' element={<Login registeredUser={registeredUser}/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/trackjob' element={<TrackJob/>}></Route>
        
    </Routes>
    
    <Footer/> 
   
    </>
  )
}

export default App