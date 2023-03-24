import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import { Matcher } from './Views/Matcher';
import { Header } from './Components/Header';


function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Matcher' element={<Matcher/>} />
          {/* <Route path='/Profile' element={<Profile/>} />
          <Route path='/Register' element={<Register/>} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
