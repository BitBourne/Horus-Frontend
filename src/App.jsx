import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// pages
import LoginPage from './features/auth/pages/LoginPage'
import RegisterPage from './features/auth/pages/RegisterPage'

function App() {

  return (
    <Router>


      <Routes>
        <Route path="/" >
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
