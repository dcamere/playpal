import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Views/Login/Login';
import { Matcher } from './Views/Matcher';
import { Header } from './Components/Header';
import Register from './Views/Register/Register';
import { AppContextProvider } from './contexts/AppContext';
import { Loader } from './Components/Loader';


function App() {
  return (
    <AppContextProvider>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Matcher' element={<Matcher/>} />
          <Route path='/Register' element={<Register/>} />
          {/* <Route path='/Profile' element={<Profile/>} />
          <Route path='/Register' element={<Register/>} /> */}
        </Routes>
      </Router>
    </AppContextProvider>
  )
}

export default App
