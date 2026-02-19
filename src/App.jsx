import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

// pages
import LoginPage from './features/auth/pages/LoginPage'
import DashboardPage from './features/dashboard/pages/DashboardPage'

// layout
import MainLayout from './widgets/layout/MainLayout'

function App() {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected/Internal Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
