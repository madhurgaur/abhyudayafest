import React from 'react';

import './App.css'
import './index.css'
import   { Home }from './components'



import {Team,Events,Registration,Contact} from './components/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event1 from './components/EventsPage/Event1';
import Dancepage from './components/EventsPage/Dancepage';
import MusicPage from './components/EventsPage/Musicpage';
import Event from './components/EventsPage/Event';
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
    <Route path="/contact" element={<Contact />}/>
    <Route path="/events" element={<Event />} />
            <Route path="/events/dance" element={<Dancepage />} />
            <Route path="/events/music" element={<MusicPage />} />
            <Route path = "/events/dance/Registration" element = {<Registration/>}/>
            <Route path = "/events/music/Registration" element = {<Registration/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;