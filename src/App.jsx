import React from 'react'
import './App.css'
import { Navbar,Header,About } from './components'
<link href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" rel="stylesheet"></link>


const App = () => {
  return (
    <div className='App'>
     <div className='fest__pageA'>
       <Navbar/>
       <Header/>
     </div>
     <About/>
      
    </div>
  )
}

export default App;