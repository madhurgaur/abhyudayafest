import React from 'react';
import './home.css'
import { Navbar,Header,About, Footer, Highlights} from '../index'

const Home = () => {
  return (
    <div>
    <div className='App'>
    <div className='fest__pageA'>
      <Navbar/>
      <Header/>
    </div>
      <About/>
      <Highlights/>
     <Footer/>
   </div>
    </div>
  )
}

export default Home;
