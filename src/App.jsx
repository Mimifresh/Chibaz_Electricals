import { useState } from 'react'
import Layout from '../components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
