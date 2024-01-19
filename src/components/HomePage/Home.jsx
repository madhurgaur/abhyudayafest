import React from 'react';
import './home.css'
import { Navbar,Header,About, Footer, } from '../index'

const Home = () => {
  return (
    <div>
    <div className='App'>
    <div className='fest__pageA'>
      <Navbar/>
      <Header/>
    </div>
      <About/>
     <Footer/>
   </div>
    </div>
  )
}

export default Home;
