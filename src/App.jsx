import React from 'react'
import './App.css'
import './index.css'
import { Home } from './components'
import {Team,Events,Registration,Contact} from './components/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
<link href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" rel="stylesheet"></link>
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/team" element={<Team />}/>
    <Route path="/registration" element={<Registration />}/>
    <Route path="/events" element={<Events />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;